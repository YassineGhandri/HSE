import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskAssessmentDetailsComponent } from './risk-assessment-details/risk-assessment-details.component';
import { RiskAssessmentComponent } from './risk-assessment.component';

const routes:Routes=[{ path: 'risk_assessments', component: RiskAssessmentComponent },
{ path: 'risk_assessments/:id', component: RiskAssessmentDetailsComponent }]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class RiskAssessmentRoutingModule {}
