import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopCardComponent } from './stop-card/stop-card.component';
import { StopCardDialogComponent } from './stop-card-dialog/stop-card-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { StopCardDetailsComponent } from './stop-card-details/stop-card-details.component';

const routes:Routes=[{path:'stop_card',component:StopCardComponent}]

@NgModule({
  declarations: [
    StopCardComponent,
    StopCardDialogComponent,
    StopCardDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class StopCardModule { }
