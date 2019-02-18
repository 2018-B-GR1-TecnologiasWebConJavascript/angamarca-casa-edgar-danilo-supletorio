import { TestBed } from '@angular/core/testing';

import { ValidacionesServiceService } from './validaciones-service.service';

describe('ValidacionesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidacionesServiceService = TestBed.get(ValidacionesServiceService);
    expect(service).toBeTruthy();
  });
});
