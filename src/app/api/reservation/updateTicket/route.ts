import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phoneNumber, year, count, reservationDate } = body;

    if (!phoneNumber || !year || count === undefined || !reservationDate) {
      return NextResponse.json({ error: "phoneNumber, year, count and reservationDate are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // ساختن شیء جدید تیکت سال خاص
    const ticketUpdate = {
      [`tickets.${year}`]: { count, reservationDate }
    };

    const updateResult = await db.collection("reservations").updateOne(
      { phoneNumber },
      { $set: ticketUpdate }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Ticket updated" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
