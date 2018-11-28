import { Injectable } from '@angular/core';

import { HEROES} from '../mocks/ mocks-heroes';
import { HeroInterface} from '../interface/hero-interface';
@Injectable({
  providedIn: 'root'
})
export class HeroService {



  constructor() { }
    getHeroes(filter){
      if (filter === 'all') {return HEROES;}
      return HEROES.filter();
    }
  }
}
