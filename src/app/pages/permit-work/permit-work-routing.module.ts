import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermitWorkComponent } from './permit-work.component';

const routes: Routes = [{ path: '', component: PermitWorkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermitWorkRoutingModule {}
