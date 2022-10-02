import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  isShowDivIf = false;  
  isShowDivIf1 = false;  

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor() { }

  ngOnInit(): void {

  }

    
  toggleDisplayDivIf() {  
    
    this.isShowDivIf = !this.isShowDivIf;  
  } 
  toggleDisplayDivIf1() {  
    
    this.isShowDivIf1 = !this.isShowDivIf1;  
  } 
  

}
