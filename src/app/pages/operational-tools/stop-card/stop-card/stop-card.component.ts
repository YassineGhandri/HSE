import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StopCardDialogComponent } from '../stop-card-dialog/stop-card-dialog.component';
import { StopCardService } from '../stop-card.service';

@Component({
  selector: 'app-stop-card',
  templateUrl: './stop-card.component.html',
  styleUrls: ['./stop-card.component.css']
})
export class StopCardComponent implements OnInit {

  displayedColumns: string[] = ['reference','initiator','site','date', 'observed_risks','action'];

  status='new';
  statusStyle = 'status-default';
 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private stcService: StopCardService,

  ) { }

  ngOnInit(): void {
    this.getAllSTC();
  }
  openDialog() {

    this.dialog.open(StopCardDialogComponent, {
      width: '600px',
    }).afterClosed().subscribe(val => {
      if (val === 'save')
        this.getAllSTC();
    })

  }
  getAllSTC() {
    this.stcService.getStopCard().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert('error while fetching the record');
      }
    })
  }
  
  edit(row: any) {
    this.dialog.open(StopCardDialogComponent, {
      width: '600px',
      data: row,
    }).afterClosed().subscribe(val => {
      if (val === 'update')
        this.getAllSTC();
    })
  }
  valid(row: any) { 
    
      if(this.statusStyle == 'status-change') {
        this.statusStyle = 'status-default';
        this.status='new';
      } else {
        this.statusStyle = 'status-change';
        this.status='valid';
      }    
  } 
  deleteSTC(id: number) {
    this.stcService.deleteStopCard(id)
      .subscribe({
        next: (res) => {
          this.getAllSTC();
        },
        error: () => {
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
