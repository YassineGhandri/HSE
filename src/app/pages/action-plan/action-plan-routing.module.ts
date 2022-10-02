import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionPlanDetailsComponent } from './action-plan-details/action-plan-details.component';
import { ActionPlanComponent } from './action-plan.component';

const routes: Routes = [
  { path: 'action_plans', component: ActionPlanComponent },
  { path: 'action_plans/:id', component: ActionPlanDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionPlanRoutingModule {}
