import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RIRSComponent } from './rirs/rirs.component';
import { RIRSdetailsComponent } from './rirsdetails/rirsdetails.component';



const routes: Routes = [
  { path: 'rirs', component: RIRSComponent },
  { path: 'rirs/:id', component: RIRSdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RirsRoutingModule { }
