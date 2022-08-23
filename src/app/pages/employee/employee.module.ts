import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,  
    RouterModule.forChild([
      { path: 'employee', component: EmployeeComponent },     
    ]),
      
    
  ]
})
export class EmployeeModule { }
