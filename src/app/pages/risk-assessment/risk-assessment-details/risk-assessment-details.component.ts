import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiskAssessment } from '../risk-assessment';
import { RiskAssessmentService } from '../risk-assessment.service';

@Component({
  selector: 'app-risk-assessment-details',
  templateUrl: './risk-assessment-details.component.html',
  styleUrls: ['./risk-assessment-details.component.css'],
})
export class RiskAssessmentDetailsComponent implements OnInit {
  risk_assessment!: RiskAssessment;

  constructor(
    private riskAssessmentService: RiskAssessmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id=this.route.snapshot.paramMap.get('id')||'';

    this.riskAssessmentService.getRiskAssessmentById(id).subscribe({
      next: (res) => {
        this.risk_assessment = res;
      },
    });
  }
}
