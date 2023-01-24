import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIRSComponent } from './rirs/rirs.component';
import { RIRSDialogComponent } from './rirsdialog/rirsdialog.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RIRSdetailsComponent } from './rirsdetails/rirsdetails.component';
import { RirsRoutingModule } from './rirs-routing.module';
import { ActionPlanModule } from '../action-plan/action-plan.module';




@NgModule({
  declarations: [
    RIRSComponent,
    RIRSDialogComponent,
    RIRSdetailsComponent
  ],
  imports: [
    CommonModule,   
    MaterialModule,
    ReactiveFormsModule,
    RirsRoutingModule,
    ActionPlanModule
  ],
  exports:[RouterModule],
})
export class RIRSModule { }
