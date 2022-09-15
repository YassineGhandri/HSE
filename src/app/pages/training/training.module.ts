import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';


@NgModule({
  declarations: [
    TrainingComponent,  
  ],
  imports: [
    CommonModule,   
    MaterialModule,
    ReactiveFormsModule,
    TrainingRoutingModule
    
  ],
})
export class TrainingModule {}
