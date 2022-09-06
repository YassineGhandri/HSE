import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWADialogComponent } from './mwadialog.component';

describe('MWADialogComponent', () => {
  let component: MWADialogComponent;
  let fixture: ComponentFixture<MWADialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWADialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MWADialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
