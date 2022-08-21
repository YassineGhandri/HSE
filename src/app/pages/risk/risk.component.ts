import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RiskDialogComponent } from './risk-dialog/risk-dialog.component';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RiskService } from './risk.service';




@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  
  displayedColumns: string[] = ['title', 'probability', 'severity','rating','action'];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog:MatDialog, 
    private riskService:RiskService,
        
    ) { }

  ngOnInit(): void {
   this.getAllRisk();
  }
  openDialog() {
    
    this.dialog.open(RiskDialogComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllRisk();
      })

  }
  getAllRisk(){
    this.riskService.getRisk().subscribe({
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
    this.dialog.open(RiskDialogComponent,{
      width:'600px',
      data:row,
    }).afterClosed().subscribe(val=>
      {
        if(val==='update')
        this.getAllRisk();
      })    
  }
  deleteRisks(id:number){
    this.riskService.deleteRisk(id)
    .subscribe({
      next:(res)=>{
        this.getAllRisk();
      },
      error:()=>{
        console.log("error on delete");

      }
    })
  }
}

