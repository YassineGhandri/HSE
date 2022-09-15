import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Department } from 'src/app/pages/department/department';
import { DepartmentService } from 'src/app/pages/department/department.service';
import { NewTrainingService } from '../new-training.service';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.css'],
})
export class TrainingDialogComponent implements OnInit {
  trainingForm!: FormGroup;
  necessity = 'optional';
  departments: Department[] = [];
  Actionbtn = 'Save';
  constructor(
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<TrainingDialogComponent>,
    private trainingService: NewTrainingService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.departmentService.getDep().subscribe({
      next: (res) => {
        this.departments = res;
      },
    });
    this.trainingForm = this.formBuilder.group({
      reference: ['', Validators.required],
      title: ['', Validators.required],
      validity: ['', Validators.required],
      necessity: ['', Validators.required],
      department: [''],
      comment: ['', Validators.required],
    });
    if (this.editData) {
      this.Actionbtn = 'Update';
      this.trainingForm.patchValue(this.editData);
    }
  }

  addTraining() {
    if (!this.editData) {
      if (this.trainingForm.valid) {
        this.trainingService.postTraining(this.trainingForm.value).subscribe({
          next: (res) => {
            this.trainingForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error on save');
          },
        });
      }
    } else {
      this.updateTraining();
    }
  }
  updateTraining() {
    this.trainingService
      .putTraining(this.trainingForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          this.trainingForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('error on update');
        },
      });
  }
}
