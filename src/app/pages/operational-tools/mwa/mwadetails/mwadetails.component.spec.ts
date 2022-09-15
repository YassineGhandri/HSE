import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWAdetailsComponent } from './mwadetails.component';

describe('MWAdetailsComponent', () => {
  let component: MWAdetailsComponent;
  let fixture: ComponentFixture<MWAdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWAdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MWAdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
