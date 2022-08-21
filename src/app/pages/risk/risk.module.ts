import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskRoutingModule } from './risk-routing.module';
import { RiskComponent } from './risk.component';
import { RiskDialogComponent } from './risk-dialog/risk-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [   
    RiskDialogComponent,
    RiskComponent
  ],
  imports: [
    CommonModule,
    RiskRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class RiskModule { }
