import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Incident } from '../../incident/incident';
import { IncidentService } from '../../incident/incident.service';
import { RIRS } from '../../operational-tools/rirs/rirs';
import { RIRSService } from '../../operational-tools/rirs/rirs.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  incidents: Incident[] = [];
  rirs: RIRS[] = [];
  filterIncidents: Incident[] = [];
  totalIncidents!:number;
  filterRirs: RIRS[] = [];
  employee!: Employee;

  constructor(
    
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private incidentService: IncidentService,
    private rirsService: RIRSService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.employeeService.getEmployeeById(id).subscribe((res) => {
      this.employee = res;
    });

    this.incidentService.getIncident().subscribe({
      next: (res) => {
        this.incidents = res;
      },
      complete: () => {
        this.incidentFind();
      },
    });

    this.rirsService.getRirs().subscribe({
      next: (res) => {
        this.rirs = res;
        console.log(res);
      },
      complete: () => {
        this.rirsFind();
        console.log(this.filterRirs);
      },
    });

    
  }

  incidentFind(){
    this.filterIncidents = this.incidents.filter(
      (i) => i.reported_by == this.employee.name
    );    
  }
  rirsFind() {
    this.filterRirs = this.rirs.filter(
      (r) => r.initiator == this.employee.name
    );
  }
  

  printThisPage(){
    window.print();
  }
}
