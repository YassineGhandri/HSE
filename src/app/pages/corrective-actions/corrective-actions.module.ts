import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrectiveActionsRoutingModule } from './corrective-actions-routing.module';
import { CorrectiveActionsComponent } from './corrective-actions.component';
import { CorrectiveActionComponent } from './corrective-action/corrective-action.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CorrectiveActionsComponent,
    CorrectiveActionComponent
  ],
  imports: [
    CommonModule,   
    MaterialModule,
    ReactiveFormsModule,
    CorrectiveActionsRoutingModule,
     
  ]
})
export class CorrectiveActionsModule { }
