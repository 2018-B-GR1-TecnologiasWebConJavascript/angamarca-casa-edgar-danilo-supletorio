import { TestBed } from '@angular/core/testing';

import { UsuarioLoginServiceService } from './usuario-login-service.service';

describe('UsuarioLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioLoginServiceService = TestBed.get(UsuarioLoginServiceService);
    expect(service).toBeTruthy();
  });
});
