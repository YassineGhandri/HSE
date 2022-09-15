import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RIRSdetailsComponent } from './rirsdetails.component';

describe('RIRSdetailsComponent', () => {
  let component: RIRSdetailsComponent;
  let fixture: ComponentFixture<RIRSdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RIRSdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RIRSdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
