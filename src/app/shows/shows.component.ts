import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../services/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Show} from "../models/show";
import {NgForm} from "@angular/forms";
import {CinemahallsComponent} from "../cinemahalls/cinemahalls.component";
import {Cinemahall} from "../models/cinemahall";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {


  shows: Show[];
  @ViewChild('form') mytemplateForm: NgForm;
  modelAdd: Partial<Show> = {};
  modelEdit: Partial<Show> = {};
  cinemaHallId: number;
  group: {id: number, numberOfPlaces: number} = {id: 1, numberOfPlaces: 10};
  cinemaHallGroupsSelect: Cinemahall[] = [];
  test: number =0;



  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getShow()
    this.http.getCinemaHall().subscribe(groupSelect => this.cinemaHallGroupsSelect=groupSelect)
  }



  public getShow(): void {
    this.http.getShow().subscribe(
      (response) => {
        this.shows = response;
      },
      (error: HttpErrorResponse) =>
      {
        alert(error.message);
      });}





  onAddShow()
  {
    this.modelAdd.cinemaHall = {id: this.group.id, numberOfPlaces: this.group.numberOfPlaces};

    // @ts-ignore
    this.test = this.cinemaHallGroupsSelect.find(value => value.id == this.group.id).numberOfPlaces;
    this.modelAdd.cinemaHall = {id: this.group.id, numberOfPlaces: this.test};
    this.http.postShow(this.modelAdd as Show).subscribe((response: Show) => {this.getShow()})
    this.mytemplateForm.reset();
  }

  onDeleteShow(showId: number)
  {
    this.http.deleteShow(showId).subscribe((response: void) => {this.getShow()})
    console.log('DELETING SHOW')
  }




}
