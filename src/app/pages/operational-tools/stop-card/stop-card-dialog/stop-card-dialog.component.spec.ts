import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopCardDialogComponent } from './stop-card-dialog.component';

describe('StopCardDialogComponent', () => {
  let component: StopCardDialogComponent;
  let fixture: ComponentFixture<StopCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopCardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
