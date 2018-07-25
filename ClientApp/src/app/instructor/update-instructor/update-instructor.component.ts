import { Component, OnInit, Input } from '@angular/core';

import { Instructor } from './../../models/entities';
import { InstructorService } from './../instructor.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css']
})
export class UpdateInstructorComponent implements OnInit {
  @Input() instructor: Instructor;

  constructor(
    private db: InstructorService,
    private router: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getInstructor();
  }

  getInstructor() {
    const id = +this.router.snapshot.paramMap.get('id');
    this.db.getInstructor(id).subscribe(data => {
      this.instructor = data;
      console.log(this.instructor);
    });
  }

}
