import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPEService } from './ipe.service';
import { IPEdetailsComponent } from './ipedetails/ipedetails.component';
import { IPEdialogComponent } from './ipedialog/ipedialog.component';


@Component({
  selector: 'app-ipe',
  templateUrl: './ipe.component.html',
  styleUrls: ['./ipe.component.css']
})
export class IPEComponent implements OnInit {

  store = 0;
  isShow = true;
  panelOpenState = false;

  displayedColumns: string[] = [ 'code','type', 'description', 'store', 'action', 'MVT'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private ipeService: IPEService,
    private _formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.getAllIPE();
  }
  openDialog() {

    this.dialog.open(IPEdialogComponent, {
      width: '600px',
    }).afterClosed().subscribe(val => {
      if (val === 'save')
        this.getAllIPE();
    })

  }
  openDetails() {    
    this.dialog.open(IPEdetailsComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllIPE();
      })
  }
  sortMVT() {
    this.ipeService.getIPE().subscribe({
      next: (res) => {
        this.isShow = false;
      },
      error: () => {
        alert('error while fetching the record');
      }
    })
   
  }
  addMVT() {

    this.ipeService.getIPE().subscribe({
      next: (res) => {
        if (this.isShow === false) {
          this.isShow = true;
        }
      },
      error: () => {
        alert('error while fetching the record');
      }
    })
    
  }
  getAllIPE() {
    this.ipeService.getIPE().subscribe({
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
    this.dialog.open(IPEdialogComponent, {
      width: '600px',
      data: row,
    }).afterClosed().subscribe(val => {
      if (val === 'update')
        this.getAllIPE();
    })
  }
  deleteIPE(id: number) {
    this.ipeService.deleteIPE(id)
      .subscribe({
        next: (res) => {
          this.getAllIPE();
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
