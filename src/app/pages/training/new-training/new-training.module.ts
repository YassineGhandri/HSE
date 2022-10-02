import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTrainingComponent } from './new-training/new-training.component';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDialogComponent } from './training-dialog/training-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'newTrainings', component: NewTrainingComponent }
  
];

@NgModule({
  declarations: [
    NewTrainingComponent,
    TrainingDialogComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class NewTrainingModule {}
