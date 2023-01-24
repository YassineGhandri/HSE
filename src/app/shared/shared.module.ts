import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';





@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
    
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'home', pathMatch: 'full' },  
      {path:'home',
     
       component:HomeComponent},
      {path:'about', component:AboutComponent}
    ]),   
  ]
})
export class SharedModule { }
