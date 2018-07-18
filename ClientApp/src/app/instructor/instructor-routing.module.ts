import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InstructorComponent } from './instructor/instructor.component';


const appRoutes: Routes = [
  { path: 'instructor', component: InstructorComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)]
})

export class InstructorRoutingModule { }
