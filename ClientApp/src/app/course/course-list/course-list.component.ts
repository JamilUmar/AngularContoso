import { Component, OnInit } from '@angular/core';

import { Course } from './../../models/entities';
import { CourseService } from './../course.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
  courses: Course[];
  submitted = false;


  constructor(private db: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
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
