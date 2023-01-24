import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../employee/employee';
import { Incident } from '../incident/incident';
import { ActionPlanDetailsComponent } from './action-plan-details/action-plan-details.component';
import { ActionPlanDialogComponent } from './action-plan-dialog/action-plan-dialog.component';
import { ActionPlanService } from './action-plan.service';

@Component({
  selector: 'app-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.css'],
})
export class ActionPlanComponent implements OnInit {
  displayedColumns: string[] = [
    'sourceRef',
    'reference',
    'responsible',
    'action',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private apService: ActionPlanService
  ) {}

  ngOnInit(): void {
    this.getAllAP();
  }

  getAllAP() {
    this.apService.getAP().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;    
        console.log(res[0].corrective_actions);
      },
      error: () => {
        alert('error while fetching the record');
      },
    });
  }
  openDialog() {
    this.dialog
      .open(ActionPlanDialogComponent, {
        width: '800px',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') this.getAllAP();
      });
  }
 

  editAP(row: any) {
    this.dialog
      .open(ActionPlanDialogComponent, {
        width: '600px',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') this.getAllAP();
      });
  }
  deleteAPs(id: number) {
    this.apService.deleteAP(id).subscribe({
      next: (res) => {
        this.getAllAP();
      },
      error: () => {
        console.log('error on delete AP');
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
