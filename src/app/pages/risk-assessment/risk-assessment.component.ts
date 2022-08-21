import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RiskAssessmentDialogComponent } from '../../pages/risk-assessment/risk-assessment-dialog/risk-assessment-dialog.component';
import { RiskAssessmentService } from './risk-assessment.service';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.css']
})
export class RiskAssessmentComponent implements OnInit {

  displayedColumns: string[]=['department','operation','risks','action'];

  dataSource!: MatTableDataSource<any>; 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog:MatDialog, 
    private riskAssessmentService:RiskAssessmentService,
        
    ) { }

  ngOnInit(): void {
   this.getAllRiskAssessment();
  }
  openDialog() {
    
    this.dialog.open(RiskAssessmentDialogComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllRiskAssessment();
      })
  }
  
  getAllRiskAssessment(){
    this.riskAssessmentService.getRiskAssessment().subscribe({
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

  editAssessment(row: any){
    this.dialog.open(RiskAssessmentDialogComponent,{
      width:'600px',
      data:row,
    }).afterClosed().subscribe(val=>
      {
        if(val==='update')
        this.getAllRiskAssessment();
      })    
  }

  deleteAssessment(id:number){
    this.riskAssessmentService.deleteRiskAssessment(id)
    .subscribe({
      next:(res)=>{
        this.getAllRiskAssessment();
      },
      error:()=>{
        console.log("error on delete");
      }
    })
  }

}
