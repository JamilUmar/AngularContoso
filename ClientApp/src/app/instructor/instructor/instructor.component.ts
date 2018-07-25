import { Component, OnInit } from '@angular/core';
import { Instructor } from './../../models/entities';
import { InstructorService } from './../instructor.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})

export class InstructorComponent implements OnInit {
  instructors: Instructor[];
  Instructor: Instructor;
  selectedInstructor: Instructor;


  constructor(private db: InstructorService, private router: Router) { }
  ngOnInit(): void {
    this.getInstructors();
  }

  getInstructors() {
    this.db.getInstructors().subscribe(data => {
      this.instructors = data;
    });
  }

  goNewInstructor() {
    this.router.navigate(['./new-instructor']);
  }

  open(i: Instructor) {
    this.selectedInstructor = i;
    console.log(this.selectedInstructor);
  }
}
