import { Component, OnInit } from '@angular/core';

import { Department, Course } from './../../models/entities';
import { CourseService } from './../course.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})

export class NewCourseComponent implements OnInit {
  dept: Department[];
  course: Course = new Course();
  c: Course;


  submitted = false;
  constructor(private db: CourseService, private router: Router) { }
  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.db.getDepartments()
      .subscribe(data => this.dept = data);
  }


  onSubmit(c: Course) {
    this.submitted = true;
    this.db.createCourse(c)
    .subscribe(data => {
      this.c = data;
      this.router.navigate(['./course']);
    });
  }
}
