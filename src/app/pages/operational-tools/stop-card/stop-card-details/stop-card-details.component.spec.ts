import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopCardDetailsComponent } from './stop-card-details.component';

describe('StopCardDetailsComponent', () => {
  let component: StopCardDetailsComponent;
  let fixture: ComponentFixture<StopCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
