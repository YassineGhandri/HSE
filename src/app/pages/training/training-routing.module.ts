import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  {
    path: 'trainings',
    component: TrainingComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./new-training/new-training.module').then((m) => m.NewTrainingModule),
      },
      {
        path: '',

        loadChildren: () => import('./training-session/training-session.module').then((m) => m.TrainingSessionModule),
      },
      
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }

/*const routes: Routes = [
  {
    path: 'operational_tools',
    component: OperationalToolsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./rirs/rirs.module').then((m) => m.RIRSModule),
      },
      {
        path: '',

        loadChildren: () => import('./mwa/mwa.module').then((m) => m.MWAModule),
      },
      {
        path: '',

        loadChildren: () =>
          import('./stop-card/stop-card.module').then((m) => m.StopCardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],*/