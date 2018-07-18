import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentRoutingModule } from './student-routing.module';
import { AppMaterialModule } from '../app-material.module';


import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


import { StudentService } from './student.service';





@NgModule({
  entryComponents: [
    StudentDetailComponent
  ],
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    NewStudentComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppMaterialModule,
    StudentRoutingModule
  ],
  providers: [ StudentService ]
})


export class StudentModel { }
