import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../employee/employee';
import { EmployeeService } from '../../employee/employee.service';
import { Risk } from '../../risk/risk';
import { RiskService } from '../../risk/risk.service';
import { PermitWorkService } from '../permit-work.service';

@Component({
  selector: 'app-permit-work-dialog',
  templateUrl: './permit-work-dialog.component.html',
  styleUrls: ['./permit-work-dialog.component.css']
})
export class PermitWorkDialogComponent implements OnInit {

 

  PWForm!:FormGroup;
  employees:Employee[]=[];
  risks:Risk[]=[];
  Actionbtn='Save';
  constructor(private formBuilder:FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData:any,

    private dialogRef:MatDialogRef<PermitWorkDialogComponent>,
    private PWservice:PermitWorkService,
    private employeeService:EmployeeService,
    private riskService:RiskService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next:(res) => {
      this.employees = res;}});  
      this.riskService.getRisk().subscribe({
        next:(res) => {
        this.risks = res;}});  


    this.PWForm=this.formBuilder.group({
                  reference:['',Validators.required],
                  type:['',Validators.required],
                  object:['',Validators.required],
                  initiator:['',Validators.required],                                   
                  startDate:['',Validators.required],                      
                  risks:['',Validators.required],      
                  executors:['',Validators.required],
    });
    if(this.editData){
      this.Actionbtn='Update';   
      this.PWForm.patchValue(this.editData);          
    }
  }
  
  addPW(){
    if(!this.editData){
      if(this.PWForm.valid){
        this.PWservice.postPW(this.PWForm.value)
        .subscribe({
          next:(res)=>{
            this.PWForm.reset();  
            this.dialogRef.close('save');           
          },
          error:()=>{
            alert("error on save");
          }
        })}
      }
      else{
        this.updatePW()
      }    
  }
  updatePW(){
    this.PWservice.putPW(this.PWForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this.PWForm.reset();  
        this.dialogRef.close('update');   
      },
      error:()=>{
        alert("error on update");
      }
    })
  }
 
}
