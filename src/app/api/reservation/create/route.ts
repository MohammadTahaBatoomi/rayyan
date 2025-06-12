import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { Reservation } from "@/models/Reservation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phoneNumber } = body;

    if (!phoneNumber) {
      return NextResponse.json({ error: "phoneNumber is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // چک کن اگر شماره قبلا وجود دارد، خطا بده یا جواب مناسب
    const existing = await db.collection<Reservation>("reservations").findOne({ phoneNumber });
    if (existing) {
      return NextResponse.json({ message: "Reservation already exists", reservation: existing });
    }

    // اگر وجود نداشت، رکورد جدید بساز با tickets خالی (خالی یعنی کل سال‌ها مقدار null)
    const emptyTickets = {
      "1404": null,
      "1403": null,
      "1402": null,
      "1401": null,
      "1400": null,
      "1397": null,
    };

    const newReservation: Reservation = {
      phoneNumber,
      tickets: emptyTickets,
    };

    const result = await db.collection<Reservation>("reservations").insertOne(newReservation);

    return NextResponse.json({ message: "Reservation created", id: result.insertedId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
