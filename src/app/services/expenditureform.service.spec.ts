import { TestBed } from '@angular/core/testing';

import { ExpenditureformService } from './expenditureform.service';

describe('ExpenditureformService', () => {
  let service: ExpenditureformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenditureformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
