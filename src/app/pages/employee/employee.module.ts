import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDialogComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class EmployeeModule { }
