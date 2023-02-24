import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CinemahallsComponent} from "./cinemahalls/cinemahalls.component";
import {TicketsComponent} from "./tickets/tickets.component";
import {SeatsComponent} from "./seats/seats.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {ShowsComponent} from "./shows/shows.component";



const routes: Routes = [

  {path: '', redirectTo:'/shows', pathMatch:'full'},
  {path: 'cinemahalls', component: CinemahallsComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'seats/:id', component: SeatsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
