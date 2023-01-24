import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import { Incident } from '../incident/incident';
import { IncidentService } from '../incident/incident.service';
import { RIRS } from '../rirs/rirs';
import { RIRSService } from '../rirs/rirs.service';

import { TrainingSession } from '../training/training-session/training-session';
import { TrainingSessionService } from '../training/training-session/training-session.service';
import { CorrectiveActionsService } from '../corrective-actions/corrective-actions.service';
import { CorrectiveAction } from '../corrective-actions/corrective-action';
import { DepartmentService } from '../department/department.service';
import { Department } from '../department/department';
import { stringLength } from '@firebase/util';

export interface departmentOccurency{
  name:string,
  y:number,
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
 
  incidents: Incident[] = [];
  rirs: RIRS[] = [];
  correctiveActions: CorrectiveAction[] = [];
  closedActions: CorrectiveAction[] = [];
  trainingSessions: TrainingSession[] = []; 
  departments!:Department[]; 
  departmentOccurency:any;
  occurencyDepartment:departmentOccurency[]=[];
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  occurenciesIncidents: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  occurenciesRIRS: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  options: any;
  options1: any;
  
  

  constructor(
    private incidentService: IncidentService,
    private rirsService: RIRSService,
    private trainingSessionService: TrainingSessionService,
    private correctiveActionsService: CorrectiveActionsService,
    private departmentService:DepartmentService,
   
  ) {}

  ngOnInit() {

    

    this.incidentService.getIncident().subscribe({
      next: (res) => {
        this.incidents = res;
        console.log(this.incidents)
        for (let i = 0; i < this.incidents.length; i++) {
          let mont = this.toMonthName(
            new Date(this.incidents[i].date).getMonth() + 1
          );          
          for (let j = 0; j < this.months.length; j++) {
            if (this.months[j] == mont) {
              this.occurenciesIncidents[j]++;
            }
          }          
        }
        

       
       /*plot graph*/
        this.options = {
        chart: {
          type: 'bar'
      },
      title: {
          text: 'Yearly Incidents'
      },
     
      xAxis: {
          categories: this.months,
          accessibility: {
              description: 'Months of the year'
          }
      },
      yAxis: {
          title: {
              text: 'Incidents Number'
          },
          
      },
      tooltip: {
          crosshairs: true,
          shared: true
      },
      plotOptions: {
          bar: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
              }
          }
      },
      series: [{
          name: 'Incidents',
          marker: {
              symbol: 'square'
          },
          data: this.occurenciesIncidents
    
      }, ]
       }
    
        Highcharts.chart('incidents', this.options);
       /*plot graph*/
      },
    });
    //department

    this.departmentService.getDep().subscribe({
      next:(res)=>{           
        this.departments=res; 
       
        this.departments.forEach(e=>{
          this.departmentOccurency={
            name:e.code,
            y:0
          }
          this.incidents.forEach(i=>{
            if(e.code && e.code===i.department){
              this.departmentOccurency.y++;
                           
            }
          });
          this.occurencyDepartment.push(this.departmentOccurency);
           });   
           
             
          console.log(this.occurencyDepartment);   

        //**** */
        this.options1= {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Incidents by Department'
          },
          tooltip: {
              pointFormat: '{series.name}: {point.percentage:.1f}%'
          },
          accessibility: {
              point: {
                  valueSuffix: '%'
              }
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '{point.name}: {point.percentage:.1f} %'
                  }
              }
          },
          series: [{
              name: 'Brands',
              colorByPoint: true,
              data:this.occurencyDepartment
          }]
        }
        Highcharts.chart('department', this.options1);
      }
      
    })
    
    //department
   

    
    this.trainingSessionService.getTrainingSession().subscribe({
      next: (res) => {
        this.trainingSessions = res;
      },
    });
    this.correctiveActionsService.getCA().subscribe({
      next: (res) => {
        this.correctiveActions = res;
        this.closedActions=this.correctiveActions.filter(ca=>ca.progressAction==100);
        },
    });

 
  }

  toMonthName(monthNumber: number): string {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', {
      month: 'short',
    });
  }
  
}
