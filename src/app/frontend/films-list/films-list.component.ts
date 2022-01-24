import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/interface/page';
import { SwapiService } from 'src/app/service/swapi.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
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
    this.swapi.getFilms().subscribe(
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
    this.swapi.getFilms((<Page>this.data).next).subscribe(
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
