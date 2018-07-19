import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Student } from '../models/entities';



@Injectable()


export class StudentService {
  private student: Student[] = [];
  private url = 'http://localhost:5000/api/students/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private log(message: string) {
    // this.messageService.add('Hero Service : ' + message);
  }

  constructor(private http: HttpClient) { }

  // get<T>(): Observable<T[]> {
  //   return this.http.get<T[]>(`${this.url}students`);
  // }


  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}`);
  }
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}${id}`);
  }
  createStudent(s: Student): Observable<Student> {
    return this.http.post<Student>(this.url, JSON.stringify(s), this.httpOptions)
      .pipe(
        // tap((s: Student) => this.log(`Added Client with Id : ${c.id}`)),
        catchError(this.handleError<Student>('createStudent')));
  }
  updateStudent(s: Student): Observable<any> {
    return this.http.put(this.url + s.id, s, this.httpOptions)
      .pipe(
        // tap(_ => this.log(`Updated Client = ${client.id}`)),
        catchError(this.handleError<any>('updateStudent')));
  }

  searchStudents(term: string): Observable<Student[]> {

    if (!term.trim()) {
      // return of([]);
    }
    return this.http.get<Student[]>(`${this.url}?firstName=${term}`)
      .pipe(catchError(this.handleError<Student[]>('searchStudents', [])));
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);

      return of(result as T);
    };
  }
}
