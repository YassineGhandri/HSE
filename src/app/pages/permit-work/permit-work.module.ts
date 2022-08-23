import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermitWorkComponent } from './permit-work.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { PermitWorkDialogComponent } from './permit-work-dialog/permit-work-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PermitWorkComponent,
    PermitWorkDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'permit_work', component: PermitWorkComponent },     
    ]),
    
    
  ]
})
export class PermitWorkModule { }
