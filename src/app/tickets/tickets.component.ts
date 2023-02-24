import {Component, OnInit, ViewChild} from '@angular/core';
import {Show} from "../models/show";
import {NgForm} from "@angular/forms";
import {Cinemahall} from "../models/cinemahall";
import {HttpService} from "../services/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Ticket} from "../models/ticket";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


  tickets: Ticket[];
  @ViewChild('form') mytemplateForm: NgForm;
  modelAdd: Partial<Ticket> = {};
  modelEdit: Partial<Ticket> = {};



  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getTicket()
  }



  public getTicket(): void {
    this.http.getTicket().subscribe(
      (response) => {
        this.tickets = response;
      },
      (error: HttpErrorResponse) =>
      {
        alert(error.message);
      });}





  onAddTicket()
  {
    this.http.postTicket(this.modelAdd as Ticket).subscribe((response: Ticket) => {this.getTicket()})
    this.mytemplateForm.reset();
  }

  onDeleteTicket(ticketId: number)
  {
    this.http.deleteTicket(ticketId).subscribe((response: void) => {this.getTicket()})
    console.log('DELETING TICKETS')
  }




  onEditTicket(ticket: Ticket)
  {
    this.http.updateTicket(this.modelEdit as Ticket).subscribe((response: Ticket) => {this.getTicket()})
    console.log('EDIT Ticket')
    this.mytemplateForm.reset();
  }


  showEditWindowTask(ticket: Ticket) {
    this.modelEdit=ticket;
  }

}
