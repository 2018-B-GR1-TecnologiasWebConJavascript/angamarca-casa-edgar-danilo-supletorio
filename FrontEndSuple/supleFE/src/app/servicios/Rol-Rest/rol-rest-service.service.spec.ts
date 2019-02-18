import { TestBed } from '@angular/core/testing';

import { RolRestServiceService } from './rol-rest-service.service';

describe('RolRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolRestServiceService = TestBed.get(RolRestServiceService);
    expect(service).toBeTruthy();
  });
});
