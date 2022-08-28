import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IPEComponent } from './ipe.component';

const routes: Routes = [{ path: 'ipe', component: IPEComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IPERoutingModule { }
