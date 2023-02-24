import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { CinemahallsComponent } from './cinemahalls/cinemahalls.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { TicketsComponent } from './tickets/tickets.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { SeatsComponent } from './seats/seats.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    CinemahallsComponent,
    ReservationsComponent,
    TicketsComponent,
    SeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
