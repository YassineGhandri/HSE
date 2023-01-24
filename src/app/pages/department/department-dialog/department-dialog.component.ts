import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../employee/employee';
import { EmployeeService } from '../../employee/employee.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-dialog',
  templateUrl: './department-dialog.component.html',
  styleUrls: ['./department-dialog.component.css']
})
export class DepartmentDialogComponent implements OnInit {

  departmentForm!:FormGroup;
  Actionbtn='Save';
  employees: Employee[]=[];
  constructor(private formBuilder:FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData:any,

    private dialogRef:MatDialogRef<DepartmentDialogComponent>,
    private departmentService:DepartmentService,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getEmployee().subscribe({
      next:(res) => {
      this.employees = res;}});  


    this.departmentForm=this.formBuilder.group({
                  code:['',Validators.required],
                  name:['',Validators.required],   
                  departmentHead:[],
                  secondResponsible:[],
                  total_employee:['',Validators.required],
                  employees:['',Validators.required],                  
    });
    if(this.editData){
      this.Actionbtn='Update';
      this.departmentForm.patchValue(this.editData);        
    }
  }
  
  addDep(){
    if(!this.editData){
      if(this.departmentForm.valid){
        this.departmentService.postDep(this.departmentForm.value)
        .subscribe({
          next:(res)=>{
            this.departmentForm.reset();  
            this.dialogRef.close('save');           
          },
          error:()=>{
            alert("error on save");
          }
        })}
      }
      else{
        this.updateDep()
      }    
  }
  updateDep(){
    this.departmentService.putDep(this.departmentForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this.departmentForm.reset();  
        this.dialogRef.close('update');   
      },
      error:()=>{
        alert("error on update");
      }
    })
  }

}
