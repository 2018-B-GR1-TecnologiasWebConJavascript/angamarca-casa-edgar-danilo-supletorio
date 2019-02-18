import { TestBed } from '@angular/core/testing';

import { UsuarioRestServiceService } from './usuario-rest-service.service';

describe('UsuarioRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioRestServiceService = TestBed.get(UsuarioRestServiceService);
    expect(service).toBeTruthy();
  });
});
