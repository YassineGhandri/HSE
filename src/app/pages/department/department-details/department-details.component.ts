import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee/employee.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  department!:Department;
  constructor(
    private route:ActivatedRoute,
    private departmentService:DepartmentService
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')||"";
    this.departmentService.getDepById(id).subscribe(
      (res)=>{
        this.department=res;
      }
    )

  }

}
