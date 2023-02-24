import {Component, OnInit, ViewChild} from '@angular/core';
import {Show} from "../models/show";
import {NgForm} from "@angular/forms";
import {Cinemahall} from "../models/cinemahall";
import {HttpService} from "../services/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Ticket} from "../models/ticket";

@Component({
  selector: 'app-cinemahalls',
  templateUrl: './cinemahalls.component.html',
  styleUrls: ['./cinemahalls.component.css']
})
export class CinemahallsComponent implements OnInit {


  cinemaHalls: Cinemahall[];
  @ViewChild('form') mytemplateForm: NgForm;
  modelAdd: Partial<Cinemahall> = {};
  modelEdit: Partial<Cinemahall> = {};



  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getCinemaHall();
  }



  public getCinemaHall(): void {
    this.http.getCinemaHall().subscribe(
      (response) => {
        this.cinemaHalls = response;
      },
      (error: HttpErrorResponse) =>
      {
        alert(error.message);
      });}





  onAddCinemaHall()
  {
    this.http.postCinemaHall(this.modelAdd as Cinemahall).subscribe((response: Cinemahall) => {this.getCinemaHall()})
    this.mytemplateForm.reset();
  }
  onDeleteCinemHall(cinemaHallId: number)
  {
    this.http.deleteCinemaHall(cinemaHallId).subscribe((response: void) => {this.getCinemaHall()})
    console.log('DELETING CinemaHall')
  }




  onEditCinemahall(cinemaHall: Cinemahall)
  {
    this.http.updateCinemahall(this.modelEdit as Cinemahall).subscribe((response: Cinemahall) => {this.getCinemaHall()})
    console.log('EDIT Cinemahall')
    this.mytemplateForm.reset();
  }


  showEditWindowCinemahall(cinemaHall: Cinemahall) {
    this.modelEdit=cinemaHall;
  }

}
