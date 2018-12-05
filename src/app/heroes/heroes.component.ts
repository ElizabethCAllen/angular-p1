import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroInterface } from '../interfaces/hero-interface';
import{ HeroService }from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 heroes: HeroInterface[];
 filter= string;
hasFilter:boolean;

  constructor(private heroService: HeroService) { }

updateFilter(filter?:string){
  this.filter
}

getHeroes(filter: string){

  return this.route.params.subscribe(next: params=>{
    if (params.power){
      this.hasFilter= true;
      this.filter =params.power;
      const powerFilter:string = params.power;
      this.heroes = this.heroService.getHeroes(filter, powerFilter);
      else{
        this.hasFilter=false;
        this.filter= filter
        this.heroes = this.heroService.getHeroes(filter);
      }
      }
      else 
    }
  });
}
filterIsActive(filter:string){
  return this.filter=== filter;
}

  ngOnInit() {
    this.getHeroes(this.filter);
    console.log(this.heroes);
    
  }

}
