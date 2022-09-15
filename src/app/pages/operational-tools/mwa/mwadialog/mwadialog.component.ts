import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/pages/employee/employee';
import { EmployeeService } from 'src/app/pages/employee/employee.service';
import { MWAService } from '../mwa.service';

@Component({
  selector: 'app-mwadialog',
  templateUrl: './mwadialog.component.html',
  styleUrls: ['./mwadialog.component.css']
})
export class MWADialogComponent implements OnInit {

  MWAForm!: FormGroup;
  Actionbtn = 'Save';
  employees:Employee[]=[];
  constructor(
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<MWADialogComponent>,
    private mwaService: MWAService,
    private employeeService:EmployeeService,
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next:(res) => {
      this.employees = res;}});

    this.MWAForm = this.formBuilder.group({
      reference: ['', Validators.required],
      date: ['', Validators.required],
      site: ['', Validators.required],
      participatns: ['', Validators.required],
      observartions: ['', Validators.required],
    });
    
    if (this.editData) {
      this.Actionbtn = 'Update';
      this.MWAForm.patchValue(this.editData);
    }
  }

  addMWA() {
    if (!this.editData) {
      if (this.MWAForm.valid) {
        this.mwaService.postMWA(this.MWAForm.value).subscribe({
          next: (res) => {
            this.MWAForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error on save');
          },
        });
      }
    } else {
      this.updateMWA();
    }
  }
  updateMWA() {
    this.mwaService.putMWA(this.MWAForm.value, this.editData.id).subscribe({
      next: (res) => {
        this.MWAForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('error on update');
      },
    });
  }

}
