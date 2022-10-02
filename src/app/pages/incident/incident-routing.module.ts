import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { IncidentComponent } from './incident.component';

const routes: Routes = [
  { path: 'incidents', component: IncidentComponent }, 
  {
    path: 'incidents/:id',
    component: IncidentDetailsComponent,
   
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentRoutingModule {}
