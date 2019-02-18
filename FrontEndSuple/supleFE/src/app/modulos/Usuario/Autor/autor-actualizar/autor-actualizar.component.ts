import { Component, OnInit } from '@angular/core';
import {AutorInterface} from "../../../../interfacees/autor-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {AutorRestServiceService} from "../../../../servicios/Autor-Rest/autor-rest-service.service";

@Component({
  selector: 'app-autor-actualizar',
  templateUrl: './autor-actualizar.component.html',
  styleUrls: ['./autor-actualizar.component.scss']
})
export class AutorActualizarComponent implements OnInit {

  objetoActualizar : AutorInterface;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoRest: AutorRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const evento$ = this._objetoRest.findById(parametros.id);
          evento$
            .subscribe(
              (obj:AutorInterface) => {
                this.objetoActualizar = obj;
              }
            );
        }
      );
  }

  actualizar(objetoAc: AutorInterface) {
    if(objetoAc.idUsuario==="")
      objetoAc.idUsuario = null;
    const objeto$ = this._objetoRest.updateOneById(objetoAc);
    objeto$.subscribe(
      (m) => this._route.navigate((['/Usuario/autorVisualizar']))
    )
  }

}
