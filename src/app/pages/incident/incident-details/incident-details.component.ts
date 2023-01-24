import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Incident } from '../incident';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css'],
})
export class IncidentDetailsComponent implements OnInit {
  incident!: Incident;
  
  constructor(
    private route: ActivatedRoute,
    public incidentService: IncidentService,
    
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.incidentService.getIncidentById(id).subscribe((res) => {
      this.incident = res;
      console.log(this.incident);
    });
    
  }

  
}
