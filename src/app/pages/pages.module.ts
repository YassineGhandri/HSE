import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,       
  ],
  imports: [
    CommonModule,   
    MaterialModule,
    ReactiveFormsModule, 
    PagesRoutingModule,      
  ],
  
})
export class PagesModule { }
