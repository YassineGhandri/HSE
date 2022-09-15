import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionComponent } from './training-session.component';
import { RouterModule, Routes } from '@angular/router';
import { TrainingSessionDetailsComponent } from './training-session-details/training-session-details.component';
import { TraningSessionDialogComponent } from './traning-session-dialog/traning-session-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[{path: 'training_sessions', component: TrainingSessionComponent}]

@NgModule({
  declarations: [
    TrainingSessionComponent,
    TrainingSessionDetailsComponent,
    TraningSessionDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class TrainingSessionModule { }

/*
const routes:Routes=[{path:'RIRS',component:RIRSComponent}]


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
    RouterModule.forChild(routes),
  ],
  */