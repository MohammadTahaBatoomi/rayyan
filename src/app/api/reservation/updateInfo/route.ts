import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phoneNumber, name } = body;

    if (!phoneNumber || !name) {
      return NextResponse.json({ error: "phoneNumber and name are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const updateResult = await db.collection("reservations").updateOne(
      { phoneNumber },
      { $set: { name } }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Name updated" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
