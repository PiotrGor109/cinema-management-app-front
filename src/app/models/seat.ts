import {Timestamp} from "rxjs";

export interface Seat {
  id: number;
  seatNumber: String;
  status: String;
  showAId: number;
  showTitle: String;
  showDateTime: Timestamp<any>;
}





