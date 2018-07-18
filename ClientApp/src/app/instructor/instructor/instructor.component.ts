import { Component, OnInit } from '@angular/core';
import { Instructor } from './../../models/entities';
import { InstructorService } from './../instructor.service';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})

export class InstructorComponent implements OnInit {
  instructors: Instructor[];
  Instructor: Instructor;
  selectedInstructor: Instructor;


  constructor(private db: InstructorService) { }
  ngOnInit(): void {
    this.getInstructors();
  }

  getInstructors() {
    this.db.getInstructors().subscribe(data => {
      this.instructors = data;
    });
  }

  open(i: Instructor) {
    this.selectedInstructor = i;
    console.log(this.selectedInstructor);
  }
}
