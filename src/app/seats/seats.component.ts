import {Component, OnInit, ViewChild} from '@angular/core';
import {Cinemahall} from "../models/cinemahall";
import {NgForm} from "@angular/forms";
import {HttpService} from "../services/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Seat} from "../models/seat";
import {ActivatedRoute, Router} from "@angular/router";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {Ticket} from "../models/ticket";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  seats: Seat[];
  showId: String;
  modelAdd: Partial<Reservation> = {};
  @ViewChild('form') mytemplateForm: NgForm;

  listOfIds: number[] = [];
  listOfSeatIds: { id: number}[] = []
  imageFreeSrc = 'assets/images/seats/green_seat.png';
  imageChooseSrc = 'assets/images/seats/blue_seat.png';


  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.showId = this.router.url.split('/')[2]
    this.getSeats();
  }



  public getSeats(): void {
    this.http.getSeat(this.showId).subscribe(
      (response) => {
        this.seats = response;
      },
      (error: HttpErrorResponse) =>
      {
        alert(error.message);
      });}


  onAddReservation()
  {
    this.listOfIds.forEach(value => this.listOfSeatIds.push({id: value}))
    console.log("ZZZZZZZZZZZZZZZZZZZZZZZZ: "+ this.listOfSeatIds)
    this.modelAdd.seats = this.listOfSeatIds;
    this.http.postReservation(this.modelAdd as Reservation).subscribe((response: Reservation) => {this.getSeats()})
    this.mytemplateForm.reset();
  }

  selectSeats(id: number)
  {
    if(!this.listOfIds.includes(id)) {
      this.listOfIds.push(id);
      console.log('AAAAAAAAAAAAAA: '+this.listOfIds)
    }
  }




}
