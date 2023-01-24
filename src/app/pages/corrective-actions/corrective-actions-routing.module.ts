import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectiveActionComponent } from './corrective-action/corrective-action.component';
import { CorrectiveActionsComponent } from './corrective-actions.component';

const routes: Routes = [
  { path: 'corrective_actions', component: CorrectiveActionsComponent },
  { path: '', component: CorrectiveActionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectiveActionsRoutingModule {}
