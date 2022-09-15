import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PermitWorkDetailsComponent } from './permit-work-details/permit-work-details.component';
import { PermitWorkDialogComponent } from './permit-work-dialog/permit-work-dialog.component';
import { PermitWorkService } from './permit-work.service';

@Component({
  selector: 'app-permit-work',
  templateUrl: './permit-work.component.html',
  styleUrls: ['./permit-work.component.css']
})
export class PermitWorkComponent implements OnInit {

  displayedColumns: string[] = ['reference', 'type', 'object','initiator','action'];  
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog:MatDialog, 
    private PWservice:PermitWorkService,
        
    ) { }

  ngOnInit(): void {
   this.getAllPW();
  }
  openDialog() {
    
    this.dialog.open(PermitWorkDialogComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllPW();
      })

  }
  openDetails() {    
    this.dialog.open(PermitWorkDetailsComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllPW();
      })

  }

  getAllPW(){
    this.PWservice.getPW().subscribe({
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
  editPW(row:any){
    this.dialog.open(PermitWorkDialogComponent,{
      width:'600px',
      data:row,
    }).afterClosed().subscribe(val=>
      {
        if(val==='update')
        this.getAllPW();
      })    
  }
  deletePW(id:number){
    this.PWservice.deletePW(id)
    .subscribe({
      next:(res)=>{
        this.getAllPW();
      },
      error:()=>{
        console.log("error on delete");

      }
    })
  }
 
}

