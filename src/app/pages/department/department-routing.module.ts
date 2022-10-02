import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentComponent } from './department.component';

const routes: Routes = [
  { path: 'departments', component: DepartmentComponent },
  { path: 'departments/:id', component: DepartmentDetailsComponent},
];

@NgModule({
  imports: [
   RouterModule.forChild(routes), 
  ],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
