import { TestBed } from '@angular/core/testing';

import { LibroRestServiceService } from './libro-rest-service.service';

describe('LibroRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibroRestServiceService = TestBed.get(LibroRestServiceService);
    expect(service).toBeTruthy();
  });
});
