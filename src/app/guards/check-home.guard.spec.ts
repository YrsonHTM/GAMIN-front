import { TestBed } from '@angular/core/testing';

import { CheckHomeGuard } from './check-home.guard';

describe('CheckHomeGuard', () => {
  let guard: CheckHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
