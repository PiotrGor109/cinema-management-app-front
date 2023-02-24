import {Component, OnInit, ViewChild} from '@angular/core';
import {Ticket} from "../models/ticket";
import {NgForm} from "@angular/forms";
import {HttpService} from "../services/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Reservation} from "../models/reservation";
import {Seat} from "../models/seat";
import {ReservationRead} from "../models/reservationRead";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {


  reservations: Reservation[];
  reservationsRead: ReservationRead[];
  @ViewChild('form') mytemplateForm: NgForm;
  modelAdd: Partial<Reservation> = {};
  modelEdit: Partial<Reservation> = {};



  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getReservations()

  }



  // public getReservations(): void {
  //   this.http.getReservation().subscribe(
  //     (response) => {
  //       this.reservations = response;
  //     },
  //     (error: HttpErrorResponse) =>
  //     {
  //       alert(error.message);
  //     });}

  public getReservations(): void {
    this.http.getReservation().subscribe(
      (response) => {
        this.reservationsRead = response;
      },
      (error: HttpErrorResponse) =>
      {
        alert(error.message);
      });}



  onAddTicket()
  {
    this.http.postReservation(this.modelAdd as Reservation).subscribe((response: Reservation) => {this.getReservations()})
    this.mytemplateForm.reset();
  }

  onDeleteReservation(reservationId: number)
  {
    this.http.deleteReservation(reservationId).subscribe((response: void) => {this.getReservations()})
    console.log('DELETING Reservations')
  }




  onEditReservation(reservation: Reservation)
  {
    this.http.updateReservation(this.modelEdit as Reservation).subscribe((response: Reservation) => {this.getReservations()})
    console.log('EDIT Reservation')
    this.mytemplateForm.reset();
  }


  showEditWindowReservation(reservation: Reservation) {
    this.modelEdit=reservation;
  }




}
