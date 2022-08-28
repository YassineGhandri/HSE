import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalToolsRoutingModule } from './operational-tools-routing.module';
import { OperationalToolsComponent } from './operational-tools.component';
import { MaterialModule } from 'src/app/material/material/material.module';


@NgModule({
  declarations: [
    OperationalToolsComponent
  ],
  imports: [
    CommonModule,
    OperationalToolsRoutingModule,
    MaterialModule
  ]
})
export class OperationalToolsModule { }
