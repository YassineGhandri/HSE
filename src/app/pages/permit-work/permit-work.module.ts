import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermitWorkRoutingModule } from './permit-work-routing.module';
import { PermitWorkComponent } from './permit-work.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { PermitWorkDialogComponent } from './permit-work-dialog/permit-work-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PermitWorkComponent,
    PermitWorkDialogComponent
  ],
  imports: [
    CommonModule,
    PermitWorkRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class PermitWorkModule { }
