import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionPlanDialogComponent } from '../../action-plan/action-plan-dialog/action-plan-dialog.component';
import { ActionPlanService } from '../../action-plan/action-plan.service';
import { CorrectiveAction } from '../../corrective-actions/corrective-action';
import { RIRS } from '../rirs';
import { RIRSService } from '../rirs.service';

@Component({
  selector: 'app-rirsdetails',
  templateUrl: './rirsdetails.component.html',
  styleUrls: ['./rirsdetails.component.css'],
})
export class RIRSdetailsComponent implements OnInit {
  rirs!: RIRS;
  id!: string;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public rirsService: RIRSService,
    private dialog: MatDialog,
    private apService: ActionPlanService
  ) {}
  

  ngOnInit(): void {
    this.id = this.returnId();
    this.rirsService.getRIRSById(this.id).subscribe((res) => {
      this.rirs = res;
      console.log(this.rirs);
    }); 
   
  }
  getRirs(){
    this.id = this.returnId();
    this.rirsService.getRIRSById(this.id).subscribe((res) => {
      this.rirs = res;
    });
  }

  returnId() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    return this.id;
  }

  validRirs(id: string) {
    this.id = this.returnId();
    this.rirsService.getRIRSById(this.id).subscribe((res) => {
      this.rirs = res;      
      this.rirs.status='valid';  
      this.router.navigate(['/pages/rirs']);
    });   
    
  }
  deleteRirs() {
    let id = Number(this.returnId());
    this.rirsService.deleteRirs(id).subscribe({
      next: (res) => {
        this.router.navigate(['/pages/rirs']);
      },
    });
  }

}
