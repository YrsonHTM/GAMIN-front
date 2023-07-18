import { TestBed } from '@angular/core/testing';

import { AurhService } from './aurh.service';

describe('AurhService', () => {
  let service: AurhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AurhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
