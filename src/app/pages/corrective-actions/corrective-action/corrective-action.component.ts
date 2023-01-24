import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Department } from '../../department/department';
import { DepartmentService } from '../../department/department.service';
import { RIRSService } from '../../rirs/rirs.service';
import { CorrectiveActionsService } from '../corrective-actions.service';

@Component({
  selector: 'app-corrective-action',
  templateUrl: './corrective-action.component.html',
  styleUrls: ['./corrective-action.component.css']
})
export class CorrectiveActionComponent implements OnInit {

  CAForm!: FormGroup;
  Actionbtn = 'Save'; 
  departments:Department[]=[];
  title!:string;
  
  constructor(
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<CorrectiveActionComponent>,
    private correctiveActionsService: CorrectiveActionsService,    
    private departmentService:DepartmentService,
    private rirsService:RIRSService
  ) {}

  ngOnInit(): void {
   this.title=this.rirsService.action_title;
   
      this.departmentService.getDep().subscribe({
        next: (res) => {
          this.departments = res;
        },
      });

    this.CAForm = this.formBuilder.group({      
      referenceAction: ['', Validators.required],
      descriptionAction:['', Validators.required],
      departmentAction: ['', Validators.required],
      progressAction: ['', Validators.required],     
      startDate:['', Validators.required],
      endDate:['', Validators.required],   
    });
    if (this.editData) {
      this.Actionbtn = 'Update';
      this.CAForm.patchValue(this.editData);        
    }
  }

  addCA() {
    if (!this.editData) {
      if (this.CAForm.valid) {
        this.correctiveActionsService.postCA(this.CAForm.value).subscribe({
          next: (res) => {
            this.CAForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error on save');
          },
        });
      }
    } else {
      this.updateCA();
    }
  }
  updateCA() {   
    
    this.correctiveActionsService.putCA(this.CAForm.value, this.editData.id).subscribe({
      next: (res) => {
        this.CAForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('error on update');
      },
    });
  }

}
