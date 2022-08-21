import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  {
    path: 'risk',
    loadChildren: () =>
      import('./risk/risk.module').then((m) => m.RiskModule),
  },
  {
    path: 'actionPlan',
    loadChildren: () =>
      import('./action-plan/action-plan.module').then(
        (m) => m.ActionPlanModule
      ),
  },
  {
    path: 'riskAssessment',
    loadChildren: () =>
      import('./risk-assessment/risk-assessment.module').then(
        (m) => m.RiskAssessmentModule
      ),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: 'incident',
    loadChildren: () =>
      import('./incident/incident.module').then(
        (m) => m.IncidentModule
      ),
  },
  {
    path: 'permitWork',
    loadChildren: () =>
      import('./permit-work/permit-work.module').then(
        (m) => m.PermitWorkModule
      ),
  },
  {
    path: 'training',
    loadChildren: () =>
      import('./training/training.module').then(
        (m) => m.TrainingModule
      ),
  },
  {
    path: 'department',
    loadChildren: () =>
      import('./department/department.module').then(
        (m) => m.DepartmentModule
      ),
  },
  
  
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
