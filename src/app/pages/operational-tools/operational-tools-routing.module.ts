import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationalToolsComponent } from './operational-tools.component';

const routes: Routes = [{ path: 'operational_tools', component: OperationalToolsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalToolsRoutingModule { }
