import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MWAService } from '../mwa.service';
import { MWAdetailsComponent } from '../mwadetails/mwadetails.component';
import { MWADialogComponent } from '../mwadialog/mwadialog.component';

@Component({
  selector: 'app-mwa',
  templateUrl: './mwa.component.html',
  styleUrls: ['./mwa.component.css']
})
export class MWAComponent implements OnInit {

  displayedColumns: string[] = ['reference','date','site','participatns', 'observartions','action'];

  
 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private mwaService: MWAService,

  ) { }

  ngOnInit(): void {
    this.getAllMWA();
  }
  openDialog() {

    this.dialog.open(MWADialogComponent, {
      width: '600px',
    }).afterClosed().subscribe(val => {
      if (val === 'save')
        this.getAllMWA();
    })
  }
  openDetails() {    
    this.dialog.open(MWAdetailsComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllMWA();
      })
  }
  
  getAllMWA() {
    this.mwaService.getMWA().subscribe({
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
    this.dialog.open(MWADialogComponent, {
      width: '600px',
      data: row,
    }).afterClosed().subscribe(val => {
      if (val === 'update')
        this.getAllMWA();
    })
  }
  
  deleteMWA(id: number) {
    this.mwaService.deleteMWA(id)
      .subscribe({
        next: (res) => {
          this.getAllMWA();
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
