export interface Reservation {
  id: number;
  customerName: String;
  customerPhone: number;
  "seats": {
    "id": number
  }[]
}

