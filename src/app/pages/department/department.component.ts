import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentDialogComponent } from './department-dialog/department-dialog.component';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'total_employee','action',];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog:MatDialog, 
    private departmentService:DepartmentService,
        
    ) { }

  ngOnInit(): void {
   this.getAllDep();
  }
  openDialog() {
    
    this.dialog.open(DepartmentDialogComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllDep();
      })

  }

  getAllDep(){
    this.departmentService.getDep().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:()=>{
        alert('error while fetching the record');
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
  edit(row:any){
    this.dialog.open(DepartmentDialogComponent,{
      width:'600px',
      data:row,
    }).afterClosed().subscribe(val=>
      {
        if(val==='update')
        this.getAllDep();
      })    
  }
  deleteDep(id:number){
    this.departmentService.deleteDep(id)
    .subscribe({
      next:(res)=>{
        this.getAllDep();
      },
      error:()=>{
        console.log("error on delete");

      }
    })
  }

}
