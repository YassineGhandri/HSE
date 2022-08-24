import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RiskModule } from './risk/risk.module';

const routes: Routes = [
  { path: '', component: PagesComponent,
  children:[
    {
      path: '',
      loadChildren: () =>
        import('./risk/risk.module').then((m) => m.RiskModule),
    },
    {
      path: '',
      loadChildren: () =>
        import('./action-plan/action-plan.module').then(
          (m) => m.ActionPlanModule
        ),
    },
    {
      path: '',
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
      path: '',
      loadChildren: () =>
        import('./incident/incident.module').then(
          (m) => m.IncidentModule
        ),
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
        import('./training/training.module').then(
          (m) => m.TrainingModule
        ),
    },
    {
      path: '',
      loadChildren: () =>
        import('./department/department.module').then(
          (m) => m.DepartmentModule
        ),
    },]},
    
  ]  

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
