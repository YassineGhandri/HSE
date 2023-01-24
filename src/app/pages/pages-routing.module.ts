import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../sessions/auth.guard';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  
    children: [
      {
        path: '',
       
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      
      {
        path: '',
        loadChildren: () =>
          import('./risk-assessment/risk-assessment.module').then(
            (m) => m.RiskAssessmentModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./department/department.module').then((m) => m.DepartmentModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./incident/incident.module').then((m) => m.IncidentModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./permit-work/permit-work.module').then(
            (m) => m.PermitWorkModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./training/training.module').then((m) => m.TrainingModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./department/department.module').then(
            (m) => m.DepartmentModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./rirs/rirs.module').then(
            (m) => m.RIRSModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./corrective-actions/corrective-actions.module').then(
            (m) => m.CorrectiveActionsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
