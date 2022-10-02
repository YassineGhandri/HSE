import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionPlan } from '../action-plan';
import { ActionPlanService } from '../action-plan.service';

@Component({
  selector: 'app-action-plan-details',
  templateUrl: './action-plan-details.component.html',
  styleUrls: ['./action-plan-details.component.css']
})
export class ActionPlanDetailsComponent implements OnInit {

  actionPlan!:ActionPlan;
  constructor(
    private route:ActivatedRoute,
    private actionPlanService:ActionPlanService
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')||'';
    this.actionPlanService.getAPById(id).subscribe(
      (res)=>{
        this.actionPlan=res;
      }
    )
  }

}
