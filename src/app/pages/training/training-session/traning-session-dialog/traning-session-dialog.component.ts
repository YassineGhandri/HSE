import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/pages/employee/employee';
import { EmployeeService } from 'src/app/pages/employee/employee.service';
import { newTraining } from '../../new-training/new-training';


import { NewTrainingService } from '../../new-training/new-training.service';
import { TrainingSessionService } from '../training-session.service';

@Component({
  selector: 'app-traning-session-dialog',
  templateUrl: './traning-session-dialog.component.html',
  styleUrls: ['./traning-session-dialog.component.css'],
})
export class TraningSessionDialogComponent implements OnInit {

  trainingSessionForm!: FormGroup;
  
  Actionbtn = 'Save';

  employees: Employee[] = [];
  trainings: newTraining[] = [];
  
  constructor(
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<TraningSessionDialogComponent>,
    private trainingSessionService: TrainingSessionService,
    private employeeService: EmployeeService,
    private newtrainingService:NewTrainingService,
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next: (res) => {
        this.employees = res;
      },
    });
    this.newtrainingService.getTraining().subscribe({
      next: (res) => {
        this.trainings = res;
      },
    });

    
    this.trainingSessionForm = this.formBuilder.group({
      reference:['',Validators.required],
      subject: ['', Validators.required],
      date: ['', Validators.required],
      participants: ['', Validators.required],
      center: ['', Validators.required],
      comment: ['', Validators.required],
    });
    if (this.editData) {
      this.Actionbtn = 'Update';
      this.trainingSessionForm.patchValue(this.editData);
    }
  }

  addTraining() {
    if (!this.editData) {
      if (this.trainingSessionForm.valid) {
        this.trainingSessionService
          .postTrainingSession(this.trainingSessionForm.value)
          .subscribe({
            next: (res) => {
              this.trainingSessionForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert('error on save');
            },
          });
      }
    } else {
      this.updateTrainingSession();
    }
  }
  updateTrainingSession() {
    this.trainingSessionService
      .putTrainingSession(this.trainingSessionForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          this.trainingSessionForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('error on update');
        },
      });
  }
}
