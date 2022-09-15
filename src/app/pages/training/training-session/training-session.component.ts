import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TrainingSessionDetailsComponent } from './training-session-details/training-session-details.component';
import { TrainingSessionService } from './training-session.service';
import { TraningSessionDialogComponent } from './traning-session-dialog/traning-session-dialog.component';

@Component({
  selector: 'app-training-session',
  templateUrl: './training-session.component.html',
  styleUrls: ['./training-session.component.css']
})
export class TrainingSessionComponent implements OnInit {

  displayedColumns: string[] = ['reference','subject', 'date','center','action',];
   
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog:MatDialog, 
    private trainingSessionService:TrainingSessionService,        
    ) { }

  ngOnInit(): void {
   this.getAlltrainingSession();
  }
  openDialog() {    
    this.dialog.open(TraningSessionDialogComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAlltrainingSession();
      })

  }
  openDetails() {    
    this.dialog.open(TrainingSessionDetailsComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAlltrainingSession();
      })

  }
  getAlltrainingSession(){
    this.trainingSessionService.getTrainingSession().subscribe({
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
 
  edit(row:any){
    this.dialog.open(TraningSessionDialogComponent,{
      width:'600px',
      data:row,
    }).afterClosed().subscribe(val=>
      {
        if(val==='update')
        this.getAlltrainingSession();
      })    
  }
  deleteTrainingSessions(id:number){
    this.trainingSessionService.deleteTrainingSession(id)
    .subscribe({
      next:(res)=>{
        this.getAlltrainingSession();
      },
      error:()=>{
        console.log("error on delete");

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


}
