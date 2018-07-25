import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InstructorComponent } from './instructor/instructor.component';
import { NewInstructorComponent } from './new-instructor/new-instructor.component';
import { UpdateInstructorComponent } from './update-instructor/update-instructor.component';


const appRoutes: Routes = [
  { path: 'instructor', component: InstructorComponent },
  { path: 'new-instructor', component: NewInstructorComponent },
  { path: 'update-instructor/:id', component: UpdateInstructorComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)]
})

export class InstructorRoutingModule { }
