import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Department } from '../../department/department';
import { DepartmentService } from '../../department/department.service';
import { Employee } from '../../employee/employee';
import { EmployeeService } from '../../employee/employee.service';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-incident-dialog',
  templateUrl: './incident-dialog.component.html',
  styleUrls: ['./incident-dialog.component.css']
})
export class IncidentDialogComponent implements OnInit {
  injuryValue='No';
  containmentValue='No';
  materialValue='No';
  incidentForm!:FormGroup;
  employees:Employee[]=[];
  departments:Department[]=[];
  Actionbtn='save';
  constructor(private formBuilder: FormBuilder,
    private employeeService:EmployeeService,
    private incidentService:IncidentService, 
    private departmentService:DepartmentService, 
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<IncidentDialogComponent>,) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({
      next:(res) => {
      this.employees = res;}});
    this.departmentService.getDep().subscribe({
        next:(res) => {
        this.departments = res;}});
    
    this.incidentForm=this.formBuilder.group({
      
      reference:['',Validators.required],
        date:['',Validators.required],
        department:['',Validators.required],
        description:['',Validators.required],
        reported_by:['',Validators.required],
        injury:['',Validators.required],
        TotalInjuries:[''],
        injuredEmployee:[''],
        containmentLoss:['',Validators.required],
        quantityLoss:[''],
        contaminatedEnvironment:[''],
        materialLoss:['',Validators.required],
        DamagedEquipment:[''],
        EstimatedLoss:[''],
        actionPlan:['',Validators.required],
      });

      if(this.editData){
        this.Actionbtn='update';
        this.incidentForm.patchValue(this.editData);         
      }
      }   

    addIncident(){
      if(!this.editData){
        if(this.incidentForm.valid){
          this.incidentService.postIncident(this.incidentForm.value)
          .subscribe({
            next:(res)=>{             
              this.incidentForm.reset();  
              this.dialogRef.close('save');           
            },
            error:()=>{
              alert("error on save");
            }
          })}
        }
        else{
          this.updateIncident()
        }    
     
      
    }
    updateIncident(){
      this.incidentService.putIncident(this.incidentForm.value,this.editData.id)
      .subscribe({
        next:(res)=>{
          this.incidentForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert('error during update incident');
        }
      })

    }
  }

