import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionPlanComponent } from './action-plan.component';
import { ActionPlanDialogComponent } from './action-plan-dialog/action-plan-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ActionPlanComponent,
    ActionPlanDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,  
    RouterModule.forChild([
      { path: 'action_plan', component: ActionPlanComponent },     
    ]),
     
    
  ]
})
export class ActionPlanModule { }
