import { Injectable } from '@angular/core';

import { HEROES} from '../mocks/mock-heroes';
import { HeroInterface} from '../interfaces/hero-interface';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(filter:string, powerFilter?: string):HeroInterface[]{
    if (!filter && !powerFilter) {return HEROES;}
     return HEROES.filter( hero => {
       if (!filter && powerFilter){ return hero.powers.includes(powerFilter);}
          });
  }

getIndividualHero(params: object: HeroInterface{
  return HEROES.find(hero=> hero.id=== +params['id']);
  })
}
