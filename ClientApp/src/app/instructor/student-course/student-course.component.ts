import { Component, OnInit, Input, Inject } from '@angular/core';
import { Instructor } from './../../models/entities';
import { MAT_DIALOG_DATA } from '@angular/material';

import { InstructorService } from '../instructor.service';


@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.Component.html',
  styleUrls: ['./student-course.Component.css']
})

export class StudentCourseComponent implements OnInit {
  instructor: Instructor;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {}
}
