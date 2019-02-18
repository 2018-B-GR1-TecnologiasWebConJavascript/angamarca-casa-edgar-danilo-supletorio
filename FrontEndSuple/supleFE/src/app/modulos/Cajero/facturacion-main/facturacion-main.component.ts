import { Component, OnInit } from '@angular/core';
import {AutorInterface} from "../../../interfacees/autor-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {AutorRestServiceService} from "../../../servicios/Autor-Rest/autor-rest-service.service";
import {FacturaCabeceraInterface} from "../../../interfacees/factura-cabecera-interface";
import {FacturaCabeceraRestServiceService} from "../../../servicios/Factura-Cabecera-Rest/factura-cabecera-rest-service.service";

@Component({
  selector: 'app-facturacion-main',
  templateUrl: './facturacion-main.component.html',
  styleUrls: ['./facturacion-main.component.scss']
})
export class FacturacionMainComponent implements OnInit {

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
