import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CourseListComponent } from '../course/course-list/course-list.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';



import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { CourseRoutingModule } from './course-routing.module';

import { CourseService } from './course.service';



@NgModule({
  entryComponents: [CourseDetailComponent],
  declarations: [
    CourseListComponent,
    NewCourseComponent,
    EditCourseComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppMaterialModule,
    CourseRoutingModule
  ],
  providers: [ CourseService ]
})


export class CourseModule { }
