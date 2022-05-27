import { Injectable } from '@angular/core';

import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/interfaces/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'api/heroes'; // URL to web api

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
  // getHeroes with RxJs 'of()'
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }

  // GET heroes from the server
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  // Handle Http operation that failed.
  // Let the app continue
  // @param operation - name of the operation that failed
  // @param result - optional value to return as the observable result

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}
