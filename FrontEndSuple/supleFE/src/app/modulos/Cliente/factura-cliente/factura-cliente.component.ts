import { Component, OnInit } from '@angular/core';
import {FacturaCabeceraInterface} from "../../../interfacees/factura-cabecera-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {FacturaCabeceraRestServiceService} from "../../../servicios/Factura-Cabecera-Rest/factura-cabecera-rest-service.service";

@Component({
  selector: 'app-factura-cliente',
  templateUrl: './factura-cliente.component.html',
  styleUrls: ['./factura-cliente.component.scss']
})
export class FacturaClienteComponent implements OnInit {

  objetoActualizar : FacturaCabeceraInterface;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoRest: FacturaCabeceraRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const e$ = this._objetoRest.findById(parametros.id);
          e$
            .subscribe(
              (obj:FacturaCabeceraInterface) => {
                this.objetoActualizar = obj;
              }
            );
        }
      );
  }

  actualizar(objetoAc: FacturaCabeceraInterface) {
    const objeto$ = this._objetoRest.updateOneById(objetoAc);
    objeto$.subscribe(
      (m) => alert("Se actualizado los datos"),
      (error)=> alert("No se pudo actualizar la informacion, vuelva a recargar la pagina")
    )
  }
}
