import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../employee/employee';
import { EmployeeService } from '../../employee/employee.service';
import { Risk } from '../../risk/risk';
import { RiskService } from '../../risk/risk.service';
import { RiskAssessmentService } from '../risk-assessment.service';

@Component({
  selector: 'app-risk-assessment-dialog',
  templateUrl: './risk-assessment-dialog.component.html',
  styleUrls: ['./risk-assessment-dialog.component.css'],
})
export class RiskAssessmentDialogComponent implements OnInit {
  selectedValue!: String;
  employees: Employee[] = [];
  risks: Risk[] = [];
  riskAssessmentForm!: FormGroup;
  Actionbtn = 'save';
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<RiskAssessmentDialogComponent>,
    private riskAssessmentService: RiskAssessmentService,
    private employeeService: EmployeeService,
    private riskService: RiskService
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next: (res) => {
        this.employees = res;
      },
    });
    this.riskService.getRisk().subscribe({
      next: (res) => {
        this.risks = res;
      },
    });

    this.riskAssessmentForm = this.formBuilder.group({
      reference: ['', Validators.required],
      responsible: ['', Validators.required],
      assistant: ['', Validators.required],
      department: ['', Validators.required],
      operation: ['', Validators.required],
      risks: ['', Validators.required],
    });
    if (this.editData) {
      this.Actionbtn = 'update';
      this.riskAssessmentForm.patchValue(this.editData);
    }
  }
  addRiskAssessment() {
    if (!this.editData) {
      if (this.riskAssessmentForm.valid) {
        this.riskAssessmentService
          .postRiskAssessment(this.riskAssessmentForm.value)
          .subscribe({
            next: (res) => {
              this.riskAssessmentForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert('error on save');
            },
          });
      }
    } else {
      this.updateRiskAssessment();
    }
  }
  updateRiskAssessment() {
    this.riskAssessmentService
      .putRiskAssessment(this.riskAssessmentForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          this.riskAssessmentForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('error on update');
        },
      });
  }
}
