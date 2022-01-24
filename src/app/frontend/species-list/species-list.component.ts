import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/interface/page';
import { SwapiService } from 'src/app/service/swapi.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
  data: any;
  isButtonVisible = false;
  loading = true;

  constructor(private swapi: SwapiService) {
    this.data = {} as Page;
  }

  ngOnInit(): void { 
    this.getData();
  }

  getData(){
    this.loading = true;
    this.isButtonVisible = false;
    this.swapi.getSpecies().subscribe(
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
    this.swapi.getSpecies((<Page>this.data).next).subscribe(
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
