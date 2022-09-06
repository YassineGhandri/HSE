import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIRSComponent } from './rirs/rirs.component';
import { RIRSDialogComponent } from './rirsdialog/rirsdialog.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[{path:'RIRS',component:RIRSComponent}]


@NgModule({
  declarations: [
    RIRSComponent,
    RIRSDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class RIRSModule { }
