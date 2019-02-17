import { TestBed } from '@angular/core/testing';

import { CajeroLoginServiceeService } from './cajero-login-servicee.service';

describe('CajeroLoginServiceeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CajeroLoginServiceeService = TestBed.get(CajeroLoginServiceeService);
    expect(service).toBeTruthy();
  });
});
