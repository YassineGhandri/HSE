import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskAssessmentComponent } from './risk-assessment.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RiskAssessmentDialogComponent } from './risk-assessment-dialog/risk-assessment-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RiskAssessmentRoutingModule } from './risk-assessment-routing.module';
import { RiskAssessmentDetailsComponent } from './risk-assessment-details/risk-assessment-details.component';


@NgModule({
  declarations: [
    RiskAssessmentComponent,
    RiskAssessmentDialogComponent,
    RiskAssessmentDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RiskAssessmentRoutingModule   
  
  ]
})
export class RiskAssessmentModule { }
