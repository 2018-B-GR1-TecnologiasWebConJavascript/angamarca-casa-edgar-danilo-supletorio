import { TestBed } from '@angular/core/testing';

import { FacturaCabeceraRestServiceService } from './factura-cabecera-rest-service.service';

describe('FacturaCabeceraRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturaCabeceraRestServiceService = TestBed.get(FacturaCabeceraRestServiceService);
    expect(service).toBeTruthy();
  });
});
