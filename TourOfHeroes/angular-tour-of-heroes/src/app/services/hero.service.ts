import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../interfaces/mock-heroes';
import { Observable, ObservedValuesFromArray, of } from 'rxjs';
import { MessagesService } from './messages/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes' // URL to web api
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  constructor(
    private messageService: MessagesService,
    private http: HttpClient,
  ) { }

  private log(message: string){
    this.messageService.add(`HeroService(messageService): ${message}`);
  }

  

  // GET HEROES FROM THE SERVER
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }

  // GET single hero | updated to get by id
  getHero(id: number): Observable<Hero> {
    // for now, assume that a hero with the specified 'id' always exists.
    // GET hero by id. will 404 if id not found
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  // PUT: update the hero on the server
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`pdated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero')),
    );
  }


  /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); //log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
