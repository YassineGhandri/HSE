import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PermitWorkDialogComponent } from '../permit-work/permit-work-dialog/permit-work-dialog.component';
import { PermitWorkService } from '../permit-work/permit-work.service';
import { CorrectiveAction } from './corrective-action';
import { CorrectiveActionComponent } from './corrective-action/corrective-action.component';
import { CorrectiveActionsService } from './corrective-actions.service';

@Component({
  selector: 'app-corrective-actions',
  templateUrl: './corrective-actions.component.html',
  styleUrls: ['./corrective-actions.component.css']
})
export class CorrectiveActionsComponent implements OnInit {

  
 createpermit=true;
 action!:CorrectiveAction;
 
  displayedColumns: string[] = [   
    'referenceAction',
    'descriptionAction',
    'departmentAction',
    'startDate',
    'progressAction',
    'action', 
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog, 
    private correctiveActionsService: CorrectiveActionsService,
    private permiService:PermitWorkService
    ) {
    
  }
  
  ngOnInit(): void {
    
    this.getAllCA();
    this.correctiveActionsService.getCA().subscribe(
      (res)=>{
        console.log(res);
      }
    )
    
  }
  openDialog() {
    this.dialog
      .open(CorrectiveActionComponent, {
        width: '600px',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') 
        this.getAllCA();
      });
  }
 
  getAllCA() {
    this.correctiveActionsService.getCA().subscribe({
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
      .open(CorrectiveActionComponent, {
        width: '600px',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') 
        this.getAllCA();        
      });

  } 
  addAction() {
    this.dialog
      .open(CorrectiveActionComponent, {
        width: '600px',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') this.getAllCA();
      });
  }
  
  deleteAction(id: number) {
    this.correctiveActionsService.deleteCA(id).subscribe({
      next: (res) => {
        this.getAllCA();
      },
      error: () => {
        console.log('error on delete');
      },
    });
  } 

  createPermit(row:any){

    this.dialog
      .open(PermitWorkDialogComponent, {
        width: '600px',        
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') this.getAllCA();
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
