import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Show} from "../models/show";
import {Ticket} from "../models/ticket";
import {Cinemahall} from "../models/cinemahall";
import {Reservation} from "../models/reservation";
import {Seat} from "../models/seat";
import {ReservationRead} from "../models/reservationRead";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  private urlShow = "http://localhost:8080/shows";
  private urlCinemaHall = "http://localhost:8080/cinemahalls";
  private urlTicket = "http://localhost:8080/tickets";
  private urlSeat = "http://localhost:8080/seats";
  private urlReservation = "http://localhost:8080/reservations";




  //SHOW METHODS
  getShow(): Observable<Show[]> {
    return this.httpClient.get<Show[]>(this.urlShow)
  }

  postShow(show: Show): Observable<Show> {
    return this.httpClient.post<Show>(this.urlShow, show)
  }

  public deleteShow(showId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlShow}/${showId}`);
  }

  public updateShow(show: Show): Observable<Show> {
    return this.httpClient.put<Show>(this.urlShow, show);
  }






  //TICKET METHODS
  getTicket(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.urlTicket)
  }

  postTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(this.urlTicket, ticket)
  }

  public deleteTicket(ticketId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlTicket}/${ticketId}`);
  }

  public updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.put<Ticket>(this.urlTicket, ticket);
  }







  //CINEMA-HALL METHODS
  getCinemaHall(): Observable<Cinemahall[]> {
    return this.httpClient.get<Cinemahall[]>(this.urlCinemaHall)
  }

  postCinemaHall(cinemaHall: Cinemahall): Observable<Cinemahall> {
    return this.httpClient.post<Cinemahall>(this.urlCinemaHall, cinemaHall)
  }

  public deleteCinemaHall(cinemaHallId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlCinemaHall}/${cinemaHallId}`);
  }

  public updateCinemahall(cinemaHall: Cinemahall): Observable<Cinemahall> {
    return this.httpClient.put<Cinemahall>(this.urlCinemaHall, cinemaHall);
  }







  //RESERVATION METHODS
  // getReservation(): Observable<Reservation[]> {
  //   return this.httpClient.get<Reservation[]>(this.urlReservation)
  // }
  getReservation(): Observable<ReservationRead[]> {
    return this.httpClient.get<ReservationRead[]>(this.urlReservation)
  }

  postReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(this.urlReservation, reservation)
  }

  public deleteReservation(reservationId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlReservation}/${reservationId}`);
  }

  public updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.put<Reservation>(this.urlReservation, reservation);
  }












  //SEAT METHODS
  getSeat(showId: String): Observable<Seat[]> {
    return this.httpClient.get<Seat[]>(`${this.urlSeat}/${showId}`)
  }


}
