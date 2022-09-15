import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RIRSService } from '../rirs.service';
import { RIRSdetailsComponent } from '../rirsdetails/rirsdetails.component';
import { RIRSDialogComponent } from '../rirsdialog/rirsdialog.component';

@Component({
  selector: 'app-rirs',
  templateUrl: './rirs.component.html',
  styleUrls: ['./rirs.component.css']
})
export class RIRSComponent implements OnInit {

  displayedColumns: string[] = ['reference','status','initiator','site','description','action','validation'];

  status='new';
  statusStyle = 'status-default';

  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private rirsService: RIRSService,

  ) { }

  ngOnInit(): void {
    this.getAllRirs();
  }
  openDialog() {

    this.dialog.open(RIRSDialogComponent, {
      width: '600px',
    }).afterClosed().subscribe(val => {
      if (val === 'save')
        this.getAllRirs();
    })
  }
  openDetails() {    
    this.dialog.open(RIRSdetailsComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllRirs();
      })
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
      }
    })
  }
  
  edit(row: any) {
    this.dialog.open(RIRSDialogComponent, {
      width: '600px',
      data: row,
    }).afterClosed().subscribe(val => {
      if (val === 'update')
        this.getAllRirs();
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
  deleteRirs(id: number) {
    this.rirsService.deleteRirs(id)
      .subscribe({
        next: (res) => {
          this.getAllRirs();
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
