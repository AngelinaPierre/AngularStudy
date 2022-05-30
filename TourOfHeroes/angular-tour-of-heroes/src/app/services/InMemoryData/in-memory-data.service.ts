import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 12,
        name: 'Dr. Nice',
        power:'Really Smart' ,
        alterEgo:'Maria Alice' ,
      },
      {
        id: 13,
        name: 'Bombasto',
        power:'Super Flexible' ,
        alterEgo:'Duarte Isis' ,
      },
      {
        id: 14,
        name: 'Celeritas',
        power:'Really Smart' ,
        alterEgo:'Santa Kaya' ,
      },
      {
        id: 15,
        name: 'Magneta',
        power:'Weather Changer' ,
        alterEgo:'Olívia Yuri' ,
      },
      {
        id: 16,
        name: 'RubberMan',
        power:'Super Flexible' ,
        alterEgo:'Catarina Laís' ,
      },
      {
        id: 17,
        name: 'Dynama',
        power:'' ,
        alterEgo:'Bianca Sabrina' ,
      },
      {
        id: 18,
        name: 'Dr. IQ',
        power:'Really Smart' ,
        alterEgo:'Muriel Melissa' ,
      },
      {
        id: 19,
        name: 'Magma',
        power:'Super Hot' ,
        alterEgo:'Milene Isaac' ,
      },
      {
        id: 20,
        name: 'Tornado',
        power:'Weather Changer' ,
        alterEgo:'Aurora Mariana' ,
      },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
