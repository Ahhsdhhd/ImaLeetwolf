import { TestBed } from '@angular/core/testing';

import { BillingformService } from './billingform.service';

describe('BillingformService', () => {
  let service: BillingformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
