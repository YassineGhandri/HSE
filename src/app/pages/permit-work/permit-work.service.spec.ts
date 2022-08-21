import { TestBed } from '@angular/core/testing';

import { PermitWorkService } from './permit-work.service';

describe('PermitWorkService', () => {
  let service: PermitWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermitWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
