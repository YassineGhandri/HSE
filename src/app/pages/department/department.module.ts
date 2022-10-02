import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { DepartmentDialogComponent } from './department-dialog/department-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentDetailsComponent } from './department-details/department-details.component';



@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentDialogComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
