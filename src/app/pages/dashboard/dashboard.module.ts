import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MaterialModule } from 'src/app/material/material/material.module';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    NgApexchartsModule
  ],
  providers:[],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }
