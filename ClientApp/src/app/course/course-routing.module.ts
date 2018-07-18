import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


const appRoute: Routes = [
  { path: 'course', component: CourseListComponent },
  { path: 'new-course', component: NewCourseComponent },
  { path: 'edit-course/:id', component: EditCourseComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoute)
  ]
})

export class CourseRoutingModule { }
