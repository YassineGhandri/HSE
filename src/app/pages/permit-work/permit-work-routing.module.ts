import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermitWorkDetailsComponent } from './permit-work-details/permit-work-details.component';
import { PermitWorkComponent } from './permit-work.component';

const routes: Routes = [
  { path: 'permit_works', component: PermitWorkComponent },
  { path: 'permit_works/:id', component: PermitWorkDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermitWorkRoutingModule {}
