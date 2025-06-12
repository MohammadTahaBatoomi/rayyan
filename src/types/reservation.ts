import { Reservation } from "@/models/Reservation";

export interface CreateReservationBody {
  phoneNumber: string;
}

export interface UpdateInfoBody {
  phoneNumber: string;
  name: string;
}

export interface UpdateTicketBody {
  phoneNumber: string;
  year: string;
  count: number;
  reservationDate: string;
}
