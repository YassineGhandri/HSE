import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MWAComponent } from './mwa/mwa.component';
import { MWADialogComponent } from './mwadialog/mwadialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MWAdetailsComponent } from './mwadetails/mwadetails.component';


const routes:Routes=[{path:'MWAs',component:MWAComponent}]

@NgModule({
  declarations: [
    MWAComponent,
    MWADialogComponent,
    MWAdetailsComponent,   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class MWAModule { }
