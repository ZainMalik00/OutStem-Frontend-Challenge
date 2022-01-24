import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/interface/page';
import { SwapiService } from 'src/app/service/swapi.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  data: any;
  isButtonVisible = false;
  loading = false;

  constructor(private swapi: SwapiService) {
    this.data = {} as Page;
  }

  ngOnInit(): void { 
    this.getData();
  }

  getData(){
    this.loading = true;
    this.isButtonVisible = false;
    this.swapi.getPlanets().subscribe(
      (d) => {
        this.loading = false;
        this.data = d;
        console.log(this.data);
        if((<Page>d).next != null){
          this.isButtonVisible=true;
        }
      }
    );
  }

  loadNextPage() { 
    this.loading = true;
    this.isButtonVisible=false;
    this.swapi.getPlanets((<Page>this.data).next).subscribe(
      (d) => {
        this.loading = false;
        this.data = d;
        console.log(this.data);
        if((<Page>d).next != null){
          this.isButtonVisible=true;
        }
      }
    ); 
  } 
}
