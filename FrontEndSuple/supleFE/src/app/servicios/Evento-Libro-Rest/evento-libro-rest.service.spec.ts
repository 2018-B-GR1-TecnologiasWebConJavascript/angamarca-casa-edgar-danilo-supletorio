import { TestBed } from '@angular/core/testing';

import { EventoLibroRestService } from './evento-libro-rest.service';

describe('EventoLibroRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoLibroRestService = TestBed.get(EventoLibroRestService);
    expect(service).toBeTruthy();
  });
});
