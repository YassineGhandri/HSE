import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionPlanComponent } from './action-plan.component';
import { ActionPlanDialogComponent } from './action-plan-dialog/action-plan-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActionPlanRoutingModule } from './action-plan-routing.module';



@NgModule({
  declarations: [
    ActionPlanComponent,
    ActionPlanDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,  
    ActionPlanRoutingModule       
    
  ]
})
export class ActionPlanModule { }
