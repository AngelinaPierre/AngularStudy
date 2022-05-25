import { Injectable } from '@angular/core';

import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/interfaces/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // methods
  getHeroes(): Hero[] {
    return HEROES;
  }

}
