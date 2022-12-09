import { TestBed } from '@angular/core/testing';

import { GcformService } from './gcform.service';

describe('GcformService', () => {
  let service: GcformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
