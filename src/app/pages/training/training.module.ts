import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { TrainingDialogComponent } from './training-dialog/training-dialog.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild([
      { path: 'trainings', component: TrainingComponent },
      { path: 'training_sessions', component: TrainingSessionComponent },
    ]),
  ],
})
export class TrainingModule {}
