import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Department } from '../../department/department';


import { DepartmentService } from '../../department/department.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
employeeForm!:FormGroup;
departments:Department[]=[];
Actionbtn='Save'
  constructor(private formBuilder:FormBuilder,
    private employeeService:EmployeeService,
    private departmentService:DepartmentService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<EmployeeDialogComponent>,) { }

  ngOnInit(): void {

    this.departmentService.getDep().subscribe({
      next:(res) => {
      this.departments = res;}});
    this.employeeForm=this.formBuilder.group({      
            matricule:['',Validators.required],
            name:['',Validators.required],
            role:['',Validators.required],
            department:['',Validators.required],
    });
    if(this.editData){
      this.Actionbtn='update'; 
      this.employeeForm.patchValue(this.editData);       
      /*this.employeeForm.controls['matricule'].setValue(this.editData.matricule);
      this.employeeForm.controls['name'].setValue(this.editData.name);
      this.employeeForm.controls['role'].setValue(this.editData.role);
      this.employeeForm.controls['CNSS'].setValue(this.editData.CNSS);     */ 
    }
  }
  addEmployee(){
    if(!this.editData){
      if(this.employeeForm.valid){
        this.employeeService.postEmployee(this.employeeForm.value)
        .subscribe({
          next:(res)=>{
            this.employeeForm.reset();  
            this.dialogRef.close('save');           
          },
          error:()=>{
            alert("error on save");
          }
        })}
      }
      else{
        this.updateEmployee()
      }   
  }
  updateEmployee(){
    this.employeeService.putEmployee(this.employeeForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this.employeeForm.reset();  
        this.dialogRef.close('update');   
      },
      error:()=>{
        alert("error on update");
      }
    })
  }
}
