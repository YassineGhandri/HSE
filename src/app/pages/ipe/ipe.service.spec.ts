import { TestBed } from '@angular/core/testing';

import { IPEService } from './ipe.service';

describe('IPEService', () => {
  let service: IPEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
