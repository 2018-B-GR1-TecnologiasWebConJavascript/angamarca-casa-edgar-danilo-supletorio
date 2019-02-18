import { TestBed } from '@angular/core/testing';

import { AutenticacionServiceService } from './autenticacion-service.service';

describe('AutenticacionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticacionServiceService = TestBed.get(AutenticacionServiceService);
    expect(service).toBeTruthy();
  });
});
