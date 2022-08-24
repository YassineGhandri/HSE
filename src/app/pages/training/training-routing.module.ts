import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { TrainingComponent } from './training.component';

const routes:Routes=[
  { path: 'trainings', component: TrainingComponent },
  { path: 'training_sessions', component: TrainingSessionComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
