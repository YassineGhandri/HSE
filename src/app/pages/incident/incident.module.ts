import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentComponent } from './incident.component';
import { IncidentDialogComponent } from './incident-dialog/incident-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';


@NgModule({
  declarations: [
    IncidentComponent,
    IncidentDialogComponent,
    IncidentDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    IncidentRoutingModule
   
  ]
})
export class IncidentModule { }
