import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RiskModule } from './risk/risk.module';
import { RiskAssessmentModule } from './risk-assessment/risk-assessment.module';
import { IncidentModule } from './incident/incident.module';
import { PermitWorkModule } from './permit-work/permit-work.module';
import { TrainingModule } from './training/training.module';
import { ActionPlanModule } from './action-plan/action-plan.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,       
  ],
  imports: [
    CommonModule,   
    MaterialModule,
    ReactiveFormsModule, 
    PagesRoutingModule,   
    
  ],
  
})
export class PagesModule { }
