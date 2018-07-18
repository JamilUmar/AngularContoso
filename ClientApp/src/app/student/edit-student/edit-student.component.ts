import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StudentService } from './../student.service';
import { Student } from '../../models/entities';



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {
  student: Student;

  constructor(
    private db: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.db.getStudent(id)
      .subscribe(data => {
        this.student = data;
      });
  }

  goBack() {
    this.location.back();
  }

  updateStudent() {
    this.db.updateStudent(this.student)
      .subscribe(() => this.goBack());
  }
}
