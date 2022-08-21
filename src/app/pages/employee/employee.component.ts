import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns:string[]  = ['matricule', 'name', 'role', 'department','action'];
  dataSource!: MatTableDataSource<any>; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog:MatDialog,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  openDialog(){
    this.dialog.open(EmployeeDialogComponent,{
      width:'600px'
    }).afterClosed().subscribe({
      next:(value) =>{
        this.getAllEmployee();
      },
    })
  }
  getAllEmployee(){
    return this.employeeService.getEmployee().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:()=>{
        alert('error');
      }
    })
  }
  editEmployee(element:any){
    this.dialog.open(EmployeeDialogComponent,{
      width:'600px',
      data:element,
    }).afterClosed().subscribe({
      next:()=>{
        this.getAllEmployee();
      }      
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next:(res)=>{
        this.getAllEmployee();
      },
      error:()=>{
        console.log("error on delete");

      }
    })
  }
}
