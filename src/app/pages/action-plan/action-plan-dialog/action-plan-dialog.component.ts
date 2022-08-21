import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../employee/employee';
import { EmployeeService } from '../../employee/employee.service';
import { Incident } from '../../incident/incident';
import { IncidentService } from '../../incident/incident.service';

import { ActionPlanService } from '../action-plan.service';

@Component({
  selector: 'app-action-plan-dialog',
  templateUrl: './action-plan-dialog.component.html',
  styleUrls: ['./action-plan-dialog.component.css']
})
export class ActionPlanDialogComponent implements OnInit {

  APForm!:FormGroup;
  employees:Employee[]=[];
  incidents:Incident[]=[];
  Actionbtn='Save';
  constructor(private formBuilder:FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData:any,

    private dialogRef:MatDialogRef<ActionPlanDialogComponent>,
    private APservice:ActionPlanService,
    private employeeService:EmployeeService,
    private incidentService:IncidentService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next:(res) => {
      this.employees = res;}});  

    this.incidentService.getIncident().subscribe({
        next:(res) => {
      this.incidents = res;}});  

    this.APForm=this.formBuilder.group({
                  reference:['',Validators.required],
                  responsible:['',Validators.required],
                  corrective_actions:['',Validators.required],                 
                  progress:['',Validators.required],                  
    });
    if(this.editData)
    {
      this.Actionbtn='Update';      
      this.APForm.controls['reference'].setValue(this.editData.reference);
      this.APForm.controls['responsible'].setValue(this.editData.responsible);
      this.APForm.controls['corrective_actions'].setValue(this.editData.corrective_actions);
      this.APForm.controls['progress'].setValue(this.editData.progress);      
    }
  }  
  addAP(){
    if(!this.editData){
      if(this.APForm.valid){
        this.APservice.postAP(this.APForm.value)
        .subscribe({
          next:(res)=>{
            this.APForm.reset();  
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
  };
  updateRisk(){
    this.APservice.putAP(this.APForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this.APForm.reset();  
        this.dialogRef.close('update');   
      },
      error:()=>{
        alert("error on update");
      }
    })
  };

}
