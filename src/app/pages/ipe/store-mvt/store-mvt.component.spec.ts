import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMVTComponent } from './store-mvt.component';

describe('StoreMVTComponent', () => {
  let component: StoreMVTComponent;
  let fixture: ComponentFixture<StoreMVTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreMVTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreMVTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
