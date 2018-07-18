import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorComponent } from './instructor/instructor.component';
import { InstructorCourseComponent } from './instructor-course/instructor-course.component';
import { StudentCourseComponent } from './student-course/student-course.component';

import { AppMaterialModule } from './../app-material.module';
import { InstructorRoutingModule } from './instructor-routing.module';

import { InstructorService } from './instructor.service';




@NgModule({
  declarations: [
    InstructorComponent,
    InstructorCourseComponent,
    StudentCourseComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    InstructorRoutingModule,
  ],
  providers: [ InstructorService ],
  entryComponents:[
    StudentCourseComponent
  ],
})

export class InstructorModule { }
