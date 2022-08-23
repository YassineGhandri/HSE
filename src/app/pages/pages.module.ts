import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../material/material/material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RiskModule } from './risk/risk.module';
import { RiskAssessmentModule } from './risk-assessment/risk-assessment.module';
import { IncidentModule } from './incident/incident.module';
import { PermitWorkModule } from './permit-work/permit-work.module';
import { TrainingModule } from './training/training.module';
import { ActionPlanModule } from './action-plan/action-plan.module';



@NgModule({
  declarations: [
    PagesComponent,       
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule, 
    RiskModule,
    RiskAssessmentModule,
    IncidentModule,
    PermitWorkModule,
    TrainingModule,
    ActionPlanModule,   
    RouterModule,   
    
  ],
  
})
export class PagesModule { }
