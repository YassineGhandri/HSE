import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { TrainingDialogComponent } from './training-dialog/training-dialog.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
  declarations: [
    TrainingComponent,
    TrainingDialogComponent,
    TrainingSessionComponent,
  ],
  imports: [
    CommonModule,   
    MaterialModule,
    ReactiveFormsModule,
    TrainingRoutingModule
    
  ],
})
export class TrainingModule {}
