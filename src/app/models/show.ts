import {Timestamp} from "rxjs";
import {PatternValidator} from "@angular/forms";

export interface Show {
  id: number;
  title: String;
  durationTime: number;
  movieType: String;
  imagePath:String;
  dateTime: Timestamp<any>;
  cinemaHall: {
    id: number,
    numberOfPlaces: number;
  };
}







