import { Component, OnInit } from '@angular/core';
import { RiskAssessment } from '../risk-assessment';
import { RiskAssessmentService } from '../risk-assessment.service';

@Component({
  selector: 'app-risk-assessment-details',
  templateUrl: './risk-assessment-details.component.html',
  styleUrls: ['./risk-assessment-details.component.css']
})
export class RiskAssessmentDetailsComponent implements OnInit {

  risk_assessments:RiskAssessment[]=[];

  constructor(private riskAssessmentService:RiskAssessmentService) { }

  ngOnInit(): void {
    this.riskAssessmentService.getRiskAssessment().subscribe({
      next: (res) => {
        this.risk_assessments = res;
      },
    });

}
}