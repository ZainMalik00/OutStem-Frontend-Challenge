import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http : HttpClient) { 
  }

  getFilms(page?: string){
    if(page != undefined){
      return this.http.get(page);
    }
    return this.http.get<Page>('https://swapi.dev/api/films/');
  }

  getPeople(page?: string){
    if(page != undefined){
      return this.http.get(page);
    }
    return this.http.get<Page>('https://swapi.dev/api/people/');
  }

  getPlanets(page?: string){
    if(page != undefined){
      return this.http.get(page);
    }
    return this.http.get<Page>('https://swapi.dev/api/planets/');
  }

  getSpecies(page?: string){
    if(page != undefined){
      return this.http.get(page);
    }
    return this.http.get<Page>('https://swapi.dev/api/species/');
  }
  
  getStarships(page?: string){
    if(page != undefined){
      return this.http.get(page);
    }
    return this.http.get<Page>('https://swapi.dev/api/starships/');
  }

  getVehicles(page?: string){
    if(page != undefined){
      return this.http.get(page);
    }
    return this.http.get<Page>('https://swapi.dev/api/vehicles/');
  }

}
