import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Department } from '../../department/department';
import { DepartmentService } from '../../department/department.service';
import { Employee } from '../../employee/employee';
import { EmployeeService } from '../../employee/employee.service';
import { Incident } from '../../incident/incident';
import { IncidentService } from '../../incident/incident.service';
import { RIRS } from '../../rirs/rirs';
import { RIRSService } from '../../rirs/rirs.service';

import { ActionPlanService } from '../action-plan.service';
import { CorrectiveAction } from '../../corrective-actions/corrective-action';

@Component({
  selector: 'app-action-plan-dialog',
  templateUrl: './action-plan-dialog.component.html',
  styleUrls: ['./action-plan-dialog.component.css'],
})
export class ActionPlanDialogComponent implements OnInit {
  APForm!: FormGroup;
  CAForm!: FormGroup;
  Actionbtn = 'Save';
  sourceValue = 'RIRS';
  employees: Employee[] = [];
  departments: Department[] = [];
  incidents: Incident[] = [];
  rirs: RIRS[] = [];
  actions:CorrectiveAction[]=[];

  get corrective_actions() {
    return this.APForm.controls['corrective_actions'] as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<ActionPlanDialogComponent>,
    private APservice: ActionPlanService,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private incidentService: IncidentService,
    public _rirsService: RIRSService
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next: (res) => {
        this.employees = res;
      },
    });
    this.departmentService.getDep().subscribe({
      next: (res) => {
        this.departments = res;
      },
    });

    this.incidentService.getIncident().subscribe({
      next: (res) => {
        this.incidents = res.filter(
          (i: { status: string }) => i.status == 'Valid'
        );
      },
    });
    this._rirsService.getRirs().subscribe({
      next: (res) => {
        this.rirs = res.filter((r: { status: string }) => r.status == 'Valid');
      },
    });

  

    this.APForm = this.formBuilder.group({
      source: ['', Validators.required],
      sourceRef: ['', Validators.required],
      reference: ['', Validators.required],
      responsible: ['', Validators.required],
      corrective_actions: this.formBuilder.array([]),
    });
    if (this.editData) {
      this.Actionbtn = 'Update';
      this.APForm.patchValue(this.editData);
    }
  }
  addAP() {
    if (!this.editData) {
      if (this.APForm.valid) {
        this.APservice.postAP(this.APForm.value).subscribe({
          next: (res) => {
            this.APForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error on save');
          },
        });
      }
    } else {
      this.updateAP();
    }
  }
  updateAP() {
    this.APservice.putAP(this.APForm.value, this.editData.id).subscribe({
      next: (res) => {
        this.APForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('error on update');
      },
    });
  }

  addNewAction() {

    const actions = this.APForm.controls['corrective_actions'] as FormArray;   
    
    actions.push(this.formBuilder.group({
      referenceAction: ['', Validators.required],
      descriptionAction:['', Validators.required],
      departmentAction: ['', Validators.required],
      progressAction: ['', Validators.required],
    }));
    
  }
}
