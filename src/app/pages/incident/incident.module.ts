import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentComponent } from './incident.component';
import { IncidentDialogComponent } from './incident-dialog/incident-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    IncidentComponent,
    IncidentDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'incident', component: IncidentComponent },     
    ]),
    
   
  ]
})
export class IncidentModule { }
