import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitWorkDetailsComponent } from './permit-work-details.component';

describe('PermitWorkDetailsComponent', () => {
  let component: PermitWorkDetailsComponent;
  let fixture: ComponentFixture<PermitWorkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermitWorkDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermitWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
