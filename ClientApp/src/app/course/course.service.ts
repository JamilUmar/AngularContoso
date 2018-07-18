import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Course, Department } from '../models/entities';


@Injectable()


export class CourseService {
  private course: Course[] = [];
  private url = 'http://localhost:5000/api/courses';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private log(message: string) {
    // this.messageService.add('Hero Service : ' + message);
  }

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url)
      .pipe(
        catchError(this.handleError<Course[]>('getCourses')));
  }
  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError<Course>('getCourse')));
  }
  createCourse(c: Course): Observable<Course> {
    return this.http.post<Course>(this.url, c, this.httpOptions)
      .pipe(catchError(this.handleError<Course>('createCourse')));
  }
  updateCourse(c: Course): Observable<any> {
    return this.http.put(`${this.url}/${c.courseId}`, c, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateCourse')));
  }



  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('http://localhost:5000/api/departments')
      .pipe(
        catchError(this.handleError<Department[]>('getDepartmentd')));
  }







  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);

      return of(result as T);
    };
  }
}
