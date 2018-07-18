import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from './../student.service';
import { Student } from './../../models/entities';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';

import { StudentDetailComponent } from './../student-detail/student-detail.component';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit, AfterViewInit {
  students: Student[];
  stud$: Observable<Student[]>;
  private searchTerms = new Subject<string>();
  selectedStudent: Student;

  displayedColumns = ['id', 'firstName', 'lastName', 'dateEnrolled'];
  dataSource = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private db: StudentService,
    public dialog: MatDialog,
    private router: Router) { }


  ngOnInit(): void {
    // this.getStudents();
    this.stud$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.db.searchStudents(term)),
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getStudents() {
    this.db.getStudents()
      .subscribe(students => {
        // this.students = students;
        this.dataSource.data = students;
      });
  }

  onSelect(s: Student) {
    this.selectedStudent = s;
  }

  openDialog(s: Student) {
    this.selectedStudent = s;
    this.dialog.open(StudentDetailComponent, {
      data: this.selectedStudent
    });
  }

  gotoNew() {
    this.router.navigate(['/new-student']);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
