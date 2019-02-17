import { TestBed } from '@angular/core/testing';

import { ClienteLoginServiceService } from './cliente-login-service.service';

describe('ClienteLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteLoginServiceService = TestBed.get(ClienteLoginServiceService);
    expect(service).toBeTruthy();
  });
});
