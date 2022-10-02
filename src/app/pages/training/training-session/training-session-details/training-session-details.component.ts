import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingSession } from '../training-session';
import { TrainingSessionService } from '../training-session.service';

@Component({
  selector: 'app-training-session-details',
  templateUrl: './training-session-details.component.html',
  styleUrls: ['./training-session-details.component.css']
})
export class TrainingSessionDetailsComponent implements OnInit {

  trainingSession!:TrainingSession;

  constructor(
    private route:ActivatedRoute,
    private trainingSessionService:TrainingSessionService
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')||'';
    this.trainingSessionService.getTrainingSessionById(id).subscribe(
      (res)=>{
        this.trainingSession=res;
      }
    )
  }

}
