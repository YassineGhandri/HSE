import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskComponent } from './risk.component';
import { RiskDialogComponent } from './risk-dialog/risk-dialog.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RiskService } from './risk.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [   
    RiskDialogComponent,
    RiskComponent
  ],
  imports: [
    CommonModule,    
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([       
      { path: 'risk', component: RiskComponent },      
    ]),
      
    
  ],
  providers:[RiskService]
})
export class RiskModule { }
