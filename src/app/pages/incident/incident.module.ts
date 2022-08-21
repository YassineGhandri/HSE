import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentComponent } from './incident.component';
import { IncidentDialogComponent } from './incident-dialog/incident-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    IncidentComponent,
    IncidentDialogComponent
  ],
  imports: [
    CommonModule,
    IncidentRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class IncidentModule { }
