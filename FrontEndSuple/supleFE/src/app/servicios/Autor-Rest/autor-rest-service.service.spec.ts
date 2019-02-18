import { TestBed } from '@angular/core/testing';

import { AutorRestServiceService } from './autor-rest-service.service';

describe('AutorRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorRestServiceService = TestBed.get(AutorRestServiceService);
    expect(service).toBeTruthy();
  });
});
