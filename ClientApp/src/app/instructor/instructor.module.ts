import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InstructorComponent } from './instructor/instructor.component';
import { InstructorCourseComponent } from './instructor-course/instructor-course.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { NewInstructorComponent } from './new-instructor/new-instructor.component';
import { UpdateInstructorComponent } from './update-instructor/update-instructor.component';

import { AppMaterialModule } from './../app-material.module';
import { InstructorRoutingModule } from './instructor-routing.module';

import { InstructorService } from './instructor.service';





@NgModule({
  declarations: [
    InstructorComponent,
    InstructorCourseComponent,
    StudentCourseComponent,
    NewInstructorComponent,
    UpdateInstructorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppMaterialModule,
    InstructorRoutingModule,
  ],
  providers: [ InstructorService ],
  entryComponents: [
    StudentCourseComponent
  ],
})

export class InstructorModule { }
