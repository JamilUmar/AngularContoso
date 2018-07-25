import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Instructor } from './../models/entities';

@Injectable()

export class InstructorService {
  private instructor: Instructor[] = [];
  private url = 'http://localhost:5000/api/instructors/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private log(message: string) {
    // this.messageService.add('Hero Service : ' + message);
  }
  constructor(private http: HttpClient) { }

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.url);
  }
  getInstructor(id: number): Observable<Instructor> {
    return this.http.get<Instructor>(`${this.url}${id}`)
      .pipe(catchError(this.handleError<Instructor>('getInstructor')));
  }











  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);

      return of(result as T);
    };
  }
}
