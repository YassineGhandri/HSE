import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RiskService } from '../risk.service';



@Component({
  selector: 'app-risk-dialog',
  templateUrl: './risk-dialog.component.html',
  styleUrls: ['./risk-dialog.component.css']
})
export class RiskDialogComponent implements OnInit {

  riskForm!:FormGroup;
  Actionbtn='Save';
  constructor(private formBuilder:FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData:any,

    private dialogRef:MatDialogRef<RiskDialogComponent>,
    private riskService:RiskService) { }

  ngOnInit(): void {
    this.riskForm=this.formBuilder.group({
                  title:['',Validators.required],
                  probability:['',Validators.required],
                  severity:['',Validators.required],
                  rating:['',Validators.required],
                  comment:['',Validators.required],                  
    });
    if(this.editData){
      this.Actionbtn='Update';
      this.riskForm.patchValue(this.editData);     
      
    }
  }
  
  addRisk(){
    if(!this.editData){
      if(this.riskForm.valid){
        this.riskService.postRisk(this.riskForm.value)
        .subscribe({
          next:(res)=>{
            this.riskForm.reset();  
            this.dialogRef.close('save');           
          },
          error:()=>{
            alert("error on save");
          }
        })}
      }
      else{
        this.updateRisk()
      }    
  }
  updateRisk(){
    this.riskService.putRisk(this.riskForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this.riskForm.reset();  
        this.dialogRef.close('update');   
      },
      error:()=>{
        alert("error on update");
      }
    })
  }
  }



