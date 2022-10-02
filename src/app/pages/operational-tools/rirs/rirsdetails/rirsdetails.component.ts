import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RIRS } from '../rirs';
import { RIRSService } from '../rirs.service';

@Component({
  selector: 'app-rirsdetails',
  templateUrl: './rirsdetails.component.html',
  styleUrls: ['./rirsdetails.component.css'],
})
export class RIRSdetailsComponent implements OnInit {
  rirs!: RIRS;
  constructor(
    private route: ActivatedRoute,
    private rirsService: RIRSService
  ) {}

  ngOnInit(): void {
    const id = this.returnId();
    this.rirsService.getRIRSById(id).subscribe((res) => {
      this.rirs = res;
    });
  }

  returnId() {
    let id = this.route.snapshot.paramMap.get('id') || '';
    return id;
  }

  validRirs() {
    this.rirs.status = 'Valid';
    const id = this.returnId();
    this.rirsService.putRirs(this.rirs, Number(id)).subscribe((res) => {
      console.log('update');
    });
  }
  rejectRirs() {
    this.rirs.status = 'Reject';
    const id = this.returnId();
    this.rirsService.deleteRirs(Number(id)).subscribe((res) => {
      console.log('update');
    });
  }

 
}
