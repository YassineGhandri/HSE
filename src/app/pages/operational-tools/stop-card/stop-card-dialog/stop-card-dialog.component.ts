import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/pages/employee/employee';
import { EmployeeService } from 'src/app/pages/employee/employee.service';
import { StopCardModule } from '../stop-card.module';
import { StopCardService } from '../stop-card.service';

@Component({
  selector: 'app-stop-card-dialog',
  templateUrl: './stop-card-dialog.component.html',
  styleUrls: ['./stop-card-dialog.component.css']
})
export class StopCardDialogComponent implements OnInit {

  STCForm!: FormGroup;
  Actionbtn = 'Save';
  employees:Employee[]=[];
  constructor(
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<StopCardDialogComponent>,
    private stcService: StopCardService,
    private employeeService:EmployeeService,
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next:(res) => {
      this.employees = res;}});

    this.STCForm = this.formBuilder.group({
      reference: ['', Validators.required],
      date: ['', Validators.required],
      site: ['', Validators.required],
      initiator: ['', Validators.required],
      observed_risks: ['', Validators.required],
    });
    
    if (this.editData) {
      this.Actionbtn = 'Update';
      this.STCForm.patchValue(this.editData);
    }
  }

  addMWA() {
    if (!this.editData) {
      if (this.STCForm.valid) {
        this.stcService.postStopCard(this.STCForm.value).subscribe({
          next: (res) => {
            this.STCForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error on save');
          },
        });
      }
    } else {
      this.updateSTC();
    }
  }
  updateSTC() {
    this.stcService.putStopCard(this.STCForm.value, this.editData.id).subscribe({
      next: (res) => {
        this.STCForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('error on update');
      },
    });
  }


}
