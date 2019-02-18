import { Component, OnInit } from '@angular/core';
import {FacturaCabeceraInterface} from "../../../interfacees/factura-cabecera-interface";
import {FacturaCabeceraRestServiceService} from "../../../servicios/Factura-Cabecera-Rest/factura-cabecera-rest-service.service";

@Component({
  selector: 'app-cliente-main',
  templateUrl: './cliente-main.component.html',
  styleUrls: ['./cliente-main.component.scss']
})
export class ClienteMainComponent implements OnInit {

  facturas: FacturaCabeceraInterface[] = [];
  constructor(
    private readonly _facturaCabeRest: FacturaCabeceraRestServiceService
  ) { }
  ngOnInit() {
    const factu$ = this._facturaCabeRest.findAll();
    factu$.subscribe(
      fac => this.facturas = fac
    )
  }
}
