import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskAssessmentComponent } from './risk-assessment.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RiskAssessmentDialogComponent } from './risk-assessment-dialog/risk-assessment-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RiskAssessmentComponent,
    RiskAssessmentDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'risk_assessment', component: RiskAssessmentComponent },     
    ]),
  
  ]
})
export class RiskAssessmentModule { }
