import { Component, OnInit } from '@angular/core';

import { Course } from './../../models/entities';
import { CourseService } from './../course.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CourseDetailComponent } from '../course-detail/course-detail.component';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
  courses: Course[];
  submitted = false;

  selectedCourse: Course;


  constructor(
    private db: CourseService,
    private router: Router,
    public dialog: MatDialog
   ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  openDialog(c: Course) {
    this.selectedCourse = c;
    this.dialog.open(CourseDetailComponent, {
      data: this.selectedCourse,
      width: '700px'
    });
  }

  getCourses(): void {
    this.db.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  gotoNewCourse() {
    this.router.navigate(['/new-course']);
  }
}
