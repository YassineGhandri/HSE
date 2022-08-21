import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
    
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
