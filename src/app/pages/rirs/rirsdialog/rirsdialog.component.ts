import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/pages/employee/employee';
import { EmployeeService } from 'src/app/pages/employee/employee.service';
import { Department } from '../../department/department';
import { DepartmentService } from '../../department/department.service';
import { RIRSService } from '../rirs.service';

@Component({
  selector: 'app-rirsdialog',
  templateUrl: './rirsdialog.component.html',
  styleUrls: ['./rirsdialog.component.css'],
})
export class RIRSDialogComponent implements OnInit {
  
  rirsForm!: FormGroup;
  Actionbtn = 'Save'; 
  employees:Employee[]=[];
  departments:Department[]=[];
  constructor(
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<RIRSDialogComponent>,
    private rirsService: RIRSService,
    private employeeService:EmployeeService,
    private departmentService:DepartmentService
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next:(res) => {
      this.employees = res;}});
      this.departmentService.getDep().subscribe({
        next: (res) => {
          this.departments = res;
        },
      });

    this.rirsForm = this.formBuilder.group({
      status: 'New',
      reference: ['', Validators.required],     
      date: ['', Validators.required],
      department: ['', Validators.required],
      initiator: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', Validators.required],      
    });
    if (this.editData) {
      this.Actionbtn = 'Update';
      this.rirsForm.patchValue(this.editData);
      console.log('ngoninit');      
    }
  }

  addRirs() {
    if (!this.editData) {
      if (this.rirsForm.valid) {
        this.rirsService.postRirs(this.rirsForm.value).subscribe({
          next: (res) => {
            this.rirsForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error on save');
          },
        });
      }
    } else {
      this.updateRirs();
    }
  }
  updateRirs() {   
    
    this.rirsService.putRirs(this.rirsForm.value, this.editData.id).subscribe({
      next: (res) => {
        this.rirsForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('error on update');
      },
    });
  }
  }
