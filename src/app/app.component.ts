import { Component } from '@angular/core'; 
import { FilmsListComponent } from './frontend/films-list/films-list.component';
import { PeopleListComponent } from './frontend/people-list/people-list.component';
import { PlanetsListComponent } from './frontend/planets-list/planets-list.component';
import { SpeciesListComponent } from './frontend/species-list/species-list.component';
import { StarshipsListComponent } from './frontend/starships-list/starships-list.component';
import { VehiclesListComponent } from './frontend/vehicles-list/vehicles-list.component';
import { Film } from './interface/film';
import { Page } from './interface/page';
import { SwapiService } from './service/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OutStem-Frontend-Challenge';
  data: string;

  constructor(
    private swapi: SwapiService,
    private filmList: FilmsListComponent,
    private peopleList: PeopleListComponent,
    private planetList: PlanetsListComponent,
    private specieList: SpeciesListComponent,
    private starshipList: StarshipsListComponent,
    private vehicleList: VehiclesListComponent
    ){
      this.data = "";
  }
  
  ngOnInit(){
    //this.getPeopleData();
  }

  getFilmsData(){
    this.data = 'film';
    this.filmList = new FilmsListComponent(this.swapi);
  }

  getPeopleData(){
    this.data = 'people';
    this.peopleList = new PeopleListComponent(this.swapi);
  }

  getPlanetsData(){
    this.data = 'planet';
    this.planetList = new PlanetsListComponent(this.swapi);
  }
  
  getSpeciesData(){
    this.data = 'specie';
    this.specieList = new SpeciesListComponent(this.swapi);
  }

  getStarshipsData(){
    this.data = 'starship';
    this.starshipList = new StarshipsListComponent(this.swapi);
  }

  getVehiclesData(){
    this.data = 'vehicle';
    this.vehicleList = new VehiclesListComponent(this.swapi);
  }

}
