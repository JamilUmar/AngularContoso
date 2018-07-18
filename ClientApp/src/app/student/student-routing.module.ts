import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


const routes: Routes = [
  { path: 'student', component: StudentListComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'new-student', component: NewStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class StudentRoutingModule { }
