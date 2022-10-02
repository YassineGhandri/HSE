import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material/material.module';
import { SharedModule } from './shared/shared.module';
import { SessionsModule } from './sessions/sessions.module';
import {NgxPrintModule} from 'ngx-print';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    ReactiveFormsModule, 
    HttpClientModule,   
    RouterModule,  
    MaterialModule,   
    SessionsModule,
    SharedModule,
    NgxPrintModule
    
  
   
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
