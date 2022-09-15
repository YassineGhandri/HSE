import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPEdetailsComponent } from './ipedetails.component';

describe('IPEdetailsComponent', () => {
  let component: IPEdetailsComponent;
  let fixture: ComponentFixture<IPEdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPEdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPEdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
