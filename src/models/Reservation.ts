import { ObjectId } from "mongodb";

export interface TicketYearData {
  count: number;
  reservationDate: string; // ISO date string
}

export interface Tickets {
  [year: string]: TicketYearData | null;
}

export interface Reservation {
  _id?: ObjectId;
  eventId?: ObjectId;
  name?: string;
  phoneNumber: string;
  tickets: Tickets;
}
