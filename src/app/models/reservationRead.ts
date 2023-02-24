export interface ReservationRead {
  id: number;
  customerName: String;
  customerPhone: number;
  "seats": {
    "id": number;
    "seatNumber": number;
    "status": String;
    "showId": number;
    "showTitle": String;
    "showDateTime": String;
  }[]
}

