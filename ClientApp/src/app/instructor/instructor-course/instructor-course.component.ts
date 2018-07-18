import { Component, OnInit, Input } from '@angular/core';
import { Instructor, CourseAssignment, Course, Enrollment } from './../../models/entities';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { StudentCourseComponent } from '../student-course/student-course.component';



@Component({
  selector: 'app-instructor-course',
  templateUrl: './instructor-course.component.html',
  styleUrls: ['./instructor-course.component.css']
})

export class InstructorCourseComponent implements OnInit {
  @Input() instructor: Instructor;
  // enrollments: CourseAssignment;
  enrollments: Enrollment;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void { }

  // open(s: CourseAssignment) {
  //   this.enrollments = s;
  //   this.dialog.open(StudentCourseComponent, {
  //     data: this.enrollments
  //   });
  //   console.log(this.enrollments);
  // }

  open(e: Enrollment) {
    this.enrollments = e;
    this.dialog.open(StudentCourseComponent, {
      data: this.enrollments
    });
    console.log(this.enrollments);
  }
}
