import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PermitWork } from '../permit-work';
import { PermitWorkService } from '../permit-work.service';

@Component({
  selector: 'app-permit-work-details',
  templateUrl: './permit-work-details.component.html',
  styleUrls: ['./permit-work-details.component.css']
})
export class PermitWorkDetailsComponent implements OnInit {

  permitWork!:PermitWork;
  
  constructor(
    private route:ActivatedRoute,
    private permitWorkService:PermitWorkService
  ) { }

  ngOnInit(): void {
    const id=this.returnId();
    this.permitWorkService.getPWById(id).subscribe(
      (res)=>{
        this.permitWork=res;
      }
    )

  }
  returnId(){
    let id = this.route.snapshot.paramMap.get('id') || '';
    return id;
  }

  validPW() {
    this.permitWork.status = 'Valid';
    const id=this.returnId();   
    this.permitWorkService.putPW(this.permitWork, Number(id)).subscribe((res) => {
      console.log('update');
    });
  }
  rejectPW() {
    this.permitWork.status = 'Reject';
    const id=this.returnId();
    this.permitWorkService.deletePW(Number(id)).subscribe((res) => {
      console.log('update');
    });
  }

}
