import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CorrectiveActionComponent } from '../../corrective-actions/corrective-action/corrective-action.component';

import { RIRS } from '../rirs';
import { RIRSService } from '../rirs.service';
import { RIRSdetailsComponent } from '../rirsdetails/rirsdetails.component';
import { RIRSDialogComponent } from '../rirsdialog/rirsdialog.component';

@Component({
  selector: 'app-rirs',
  templateUrl: './rirs.component.html',
  styleUrls: ['./rirs.component.css'],
})
export class RIRSComponent implements OnInit {
 

 
 rirs!:RIRS;
 rirsValidation=false;
 
  displayedColumns: string[] = [   
    'reference',
    'initiator',
    'department',
    'description',
    'action',
    'validation'   
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, public rirsService: RIRSService) {
    
  }
  
  ngOnInit(): void {
    
    this.getAllRirs();
    this.rirsService.getRirs().subscribe(
      (res)=>{
        console.log(res);
      }
    )
    
  }
  openDialog() {
    this.dialog
      .open(RIRSDialogComponent, {
        width: '600px',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') 
        this.getAllRirs();
      });
  }
  openDetails() {
    this.dialog
      .open(RIRSdetailsComponent, {
        width: '600px',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') this.getAllRirs();
      });
  }
  getAllRirs() {
    this.rirsService.getRirs().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert('error while fetching the record');
      },
    });
  }

  edit(row: any) {
    this.dialog
      .open(RIRSDialogComponent, {
        width: '600px',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') 
        this.getAllRirs();        
      });

  }
  validation(row: any) {  
   row.status='Valid';   
   this.rirsService.putRirs(row, row.id).subscribe({
    next: (res) => {
      alert('RIRS validated');
    }});
  }
  addAction(row:any) {
   
    this.dialog
      .open(CorrectiveActionComponent, {
        width: '600px',        
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') this.getAllRirs();
      });
  }
  
  deleteRirs(id: number) {
    this.rirsService.deleteRirs(id).subscribe({
      next: (res) => {
        this.getAllRirs();
      },
      error: () => {
        console.log('error on delete');
      },
    });
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  
}
