import { TestBed } from '@angular/core/testing';

import { FacturaDetalleRestServiceService } from './factura-detalle-rest-service.service';

describe('FacturaDetalleRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturaDetalleRestServiceService = TestBed.get(FacturaDetalleRestServiceService);
    expect(service).toBeTruthy();
  });
});
