import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StudentService } from './../student.service';
import { Student } from '../../models/entities';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {
  student: Student;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private location: Location,
    private db: StudentService
  ) { }
  ngOnInit(): void {
    // this.getStudent();
  }

  getStudent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.db.getStudent(id)
      .subscribe(student => {
        this.student = student;
        console.log(this.student);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
