import { TestBed } from '@angular/core/testing';

import { EventoRestServiceService } from './evento-rest-service.service';

describe('EventoRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoRestServiceService = TestBed.get(EventoRestServiceService);
    expect(service).toBeTruthy();
  });
});
