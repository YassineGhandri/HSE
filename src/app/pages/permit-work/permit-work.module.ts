import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermitWorkComponent } from './permit-work.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { PermitWorkDialogComponent } from './permit-work-dialog/permit-work-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PermitWorkRoutingModule } from './permit-work-routing.module';
import { PermitWorkDetailsComponent } from './permit-work-details/permit-work-details.component';


@NgModule({
  declarations: [
    PermitWorkComponent,
    PermitWorkDialogComponent,
    PermitWorkDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PermitWorkRoutingModule   
    
  ]
})
export class PermitWorkModule { }
