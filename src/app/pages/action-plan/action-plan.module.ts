import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionPlanRoutingModule } from './action-plan-routing.module';
import { ActionPlanComponent } from './action-plan.component';
import { ActionPlanDialogComponent } from './action-plan-dialog/action-plan-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ActionPlanComponent,
    ActionPlanDialogComponent
  ],
  imports: [
    CommonModule,
    ActionPlanRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule

  ]
})
export class ActionPlanModule { }
