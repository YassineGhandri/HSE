import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPEService } from './ipe.service';
import { IPEdialogComponent } from './ipedialog/ipedialog.component';
import { StoreMVTComponent } from './store-mvt/store-mvt.component';

@Component({
  selector: 'app-ipe',
  templateUrl: './ipe.component.html',
  styleUrls: ['./ipe.component.css']
})
export class IPEComponent implements OnInit {

  store=0;

  displayedColumns: string[] = ['type', 'code', 'description','store','action'];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog:MatDialog, 
    private ipeService:IPEService,
        
    ) { }

  ngOnInit(): void {
   this.getAllIPE();
  }
  openDialog() {
    
    this.dialog.open(IPEdialogComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllIPE();
      })

  }
  openMVT() {
    
    this.dialog.open(StoreMVTComponent, {
      width:'600px',
    }).afterClosed().subscribe(val=>
      {
        if(val==='save')
        this.getAllIPE();
      })

  }
  getAllIPE(){
    this.ipeService.getIPE().subscribe({
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
    this.dialog.open(IPEdialogComponent,{
      width:'600px',
      data:row,
    }).afterClosed().subscribe(val=>
      {
        if(val==='update')
        this.getAllIPE();
      })    
  }
  deleteIPE(id:number){
    this.ipeService.deleteIPE(id)
    .subscribe({
      next:(res)=>{
        this.getAllIPE();
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
