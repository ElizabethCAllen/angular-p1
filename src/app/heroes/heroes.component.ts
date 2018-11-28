import { Component, OnInit } from '@angular/core';

import { HeroInterface } from '../interfaces/hero-interface';
import{HeroService }from '../services/hero.service';
import { HeroInterface } from '../interface/hero-interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 heroes: HeroInterface[];
 
  constructor(private heroSErvice: HeroService) { }

  ngOnInit() {
  }

}
