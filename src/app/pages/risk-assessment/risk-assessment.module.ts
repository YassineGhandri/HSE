import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskAssessmentRoutingModule } from './risk-assessment-routing.module';
import { RiskAssessmentComponent } from './risk-assessment.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RiskAssessmentDialogComponent } from './risk-assessment-dialog/risk-assessment-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    RiskAssessmentComponent,
    RiskAssessmentDialogComponent
  ],
  imports: [
    CommonModule,
    RiskAssessmentRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule    
  ]
})
export class RiskAssessmentModule { }
