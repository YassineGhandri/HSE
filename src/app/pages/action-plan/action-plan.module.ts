import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionPlanComponent } from './action-plan.component';
import { ActionPlanDialogComponent } from './action-plan-dialog/action-plan-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionPlanRoutingModule } from './action-plan-routing.module';
import { ActionPlanDetailsComponent } from './action-plan-details/action-plan-details.component';



@NgModule({
  declarations: [
    ActionPlanComponent,
    ActionPlanDialogComponent,
    ActionPlanDetailsComponent,
   
      
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,  
    ActionPlanRoutingModule     
    
  ],
  exports:[ActionPlanDialogComponent]
  
})
export class ActionPlanModule { }
