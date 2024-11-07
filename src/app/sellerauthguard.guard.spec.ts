import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sellerauthguardGuard } from './sellerauthguard.guard';

describe('sellerauthguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sellerauthguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
