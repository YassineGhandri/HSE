import { getLocaleMonthNames } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Incident } from '../incident/incident';
import { IncidentService } from '../incident/incident.service';
import { RIRS } from '../operational-tools/rirs/rirs';
import { RIRSService } from '../operational-tools/rirs/rirs.service';
import { PermitWork } from '../permit-work/permit-work';
import { PermitWorkService } from '../permit-work/permit-work.service';
import { TrainingSession } from '../training/training-session/training-session';
import { TrainingSessionService } from '../training/training-session/training-session.service';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  incidents: Incident[] = [];
  rirs: RIRS[] = [];
  permitWorks: PermitWork[] = [];
  trainingSessions: TrainingSession[] = [];

  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>|any;

  constructor(
    private incidentService: IncidentService,
    private rirsService: RIRSService,
    private trainingSessionService: TrainingSessionService,
    private permitWorkService: PermitWorkService,
   
  ) {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Incidents Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
  }

 
  ngOnInit() {
    /* card complete*/

    this.incidentService.getIncident().subscribe({
      next: (res) => {
        this.incidents = res;        
      }
    });

    this.rirsService.getRirs().subscribe({
      next: (res) => {
        this.rirs = res;
      },
    });
    this.trainingSessionService.getTrainingSession().subscribe({
      next: (res) => {
        this.trainingSessions = res;
      },
    });
    this.permitWorkService.getPW().subscribe({
      next: (res) => {
        this.permitWorks = res;
      },
    }); 

    
  }


 

}





