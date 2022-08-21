import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../material/material/material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PagesComponent,       
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,    
    ReactiveFormsModule, 
    HttpClientModule,
    HighchartsChartModule,  
    RouterModule,
    BrowserModule  
  ],
  
})
export class PagesModule { }
