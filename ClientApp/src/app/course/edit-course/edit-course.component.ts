import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CourseService } from '../course.service';
import { Course, Department } from '../../models/entities';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit {
  @Input() course: Course;
  dept: Department[];
  submitted = false;

  constructor(
    private db: CourseService,
    private location: Location,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getCourse();
    this.getDepartment();
  }

  getCourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.db.getCourse(id).subscribe(data => {
      this.course = data;
    });
  }
  getDepartment() {
    this.db.getDepartments()
      .subscribe(data => this.dept = data);
  }

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.submitted = true;
    this.db.updateCourse(this.course).subscribe(() => this.goBack());
    // console.log(c);
  }
}
