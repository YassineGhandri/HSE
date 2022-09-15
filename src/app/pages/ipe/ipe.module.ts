import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPERoutingModule } from './ipe-routing.module';
import { IPEComponent } from './ipe.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { IPEdialogComponent } from './ipedialog/ipedialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreMVTComponent } from './store-mvt/store-mvt.component';
import { IPEdetailsComponent } from './ipedetails/ipedetails.component';


@NgModule({
  declarations: [
    IPEComponent,
    IPEdialogComponent,
    StoreMVTComponent,
    IPEdetailsComponent
  ],
  imports: [
    CommonModule,
    IPERoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class IPEModule { }
