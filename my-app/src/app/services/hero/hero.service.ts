import { Injectable } from '@angular/core';

import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/interfaces/mock-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
  ) { }

  // methods

  // sync
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // async
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }

  // async, send a message when the heroes are fetched.
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}
