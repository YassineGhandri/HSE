import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [    
    UserLayoutComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports:[AuthLayoutComponent,
  ]
})
export class LayoutsModule { }
