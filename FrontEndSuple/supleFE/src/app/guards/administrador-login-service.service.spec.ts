import { TestBed } from '@angular/core/testing';

import { AdministradorLoginServiceService } from './administrador-login-service.service';

describe('AdministradorLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministradorLoginServiceService = TestBed.get(AdministradorLoginServiceService);
    expect(service).toBeTruthy();
  });
});
