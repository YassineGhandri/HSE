import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Incident } from './incident';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { IncidentDialogComponent } from './incident-dialog/incident-dialog.component';
import { IncidentService } from './incident.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

 incident!:Incident;
   

  displayedColumns: string[]=['reference','date','department',
                              'description','injury','action'];

  dataSource!: MatTableDataSource<any>; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private incidentService:IncidentService,
    private route:ActivatedRoute
    ) {}
  
  ngOnInit(): void {
    this.getAllIncident();
  }
  NewIncident() {
    this.dialog.open(IncidentDialogComponent,{
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllIncident();
      })
  }
  incidentDetail() {
    this.dialog.open(IncidentDetailsComponent,{
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllIncident();
      })
  }
  
  getAllIncident(){
    this.incidentService.getIncident().subscribe({
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
  
  deleteIncident(id:number){
    this.incidentService.deleteIncident(id).subscribe({
      next:(res)=>{
        alert('incident deleted');
        this.getAllIncident();
      },
      error:()=>{
        alert('error during incident delete');
      }
    })
  }
  editIncident(row:any){
    this.dialog.open(IncidentDialogComponent,{
      width:'600px',
      data:row,
    }).afterClosed().subscribe(val=>
      {        
        this.getAllIncident();
        alert('incident updated');
      }   
      )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
