import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingDialogComponent } from './training-dialog/training-dialog.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    TrainingComponent,
    TrainingDialogComponent,
    TrainingSessionComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule   
   
  ]
})
export class TrainingModule { }
