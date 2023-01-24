import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
  NgModel,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../employee/employee';
import { EmployeeService } from '../../employee/employee.service';
import { ActionPlan } from '../action-plan';
import { ActionPlanService } from '../action-plan.service';
import { CorrectiveAction } from '../../corrective-actions/corrective-action';

@Component({
  selector: 'app-action-plan-details',
  templateUrl: './action-plan-details.component.html',
  styleUrls: ['./action-plan-details.component.css'],
})
export class ActionPlanDetailsComponent implements OnInit {
  actionPlan!: ActionPlan;
  actions:CorrectiveAction[]=[];
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private actionPlanService: ActionPlanService,
   
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.actionPlanService.getAPById(id).subscribe((res) => {
      this.actionPlan = res;      
      this.actions=this.actionPlan.corrective_actions; 
    });    
  }  
}
