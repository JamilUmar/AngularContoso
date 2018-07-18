import { Component, OnInit } from '@angular/core';

import { Student } from '../../models/entities';
import { StudentService } from '../student.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})

export class NewStudentComponent implements OnInit {
  submit = false;
  student = new Student();
  s: Student;

  constructor(
    private db: StudentService,
    private location: Location,
    private router: Router
  ) { }
  ngOnInit(): void { }

  onSubmit(student: Student) {
    this.submit = true;
    this.db.createStudent(student)
      .subscribe(data => {
        this.s = data;
        this.location.back();
        // this.router.navigate(['/new']);
      });
  }

  goBack() {
    this.location.back();
    // e.stopPropagation();
  }
}
