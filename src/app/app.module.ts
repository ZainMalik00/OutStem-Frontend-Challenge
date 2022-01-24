import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsListComponent } from './frontend/films-list/films-list.component';
import { SwapiService } from './service/swapi.service';
import { PlanetsListComponent } from './frontend/planets-list/planets-list.component';
import { PeopleListComponent } from './frontend/people-list/people-list.component';
import { SpeciesListComponent } from './frontend/species-list/species-list.component';
import { StarshipsListComponent } from './frontend/starships-list/starships-list.component';
import { VehiclesListComponent } from './frontend/vehicles-list/vehicles-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    PlanetsListComponent,
    PeopleListComponent,
    SpeciesListComponent,
    StarshipsListComponent,
    VehiclesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    SwapiService, 
    FilmsListComponent,
    PlanetsListComponent,
    PeopleListComponent,
    SpeciesListComponent,
    StarshipsListComponent,
    VehiclesListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
