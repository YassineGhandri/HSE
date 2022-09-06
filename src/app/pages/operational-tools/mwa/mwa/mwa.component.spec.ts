import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWAComponent } from './mwa.component';

describe('MWAComponent', () => {
  let component: MWAComponent;
  let fixture: ComponentFixture<MWAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
