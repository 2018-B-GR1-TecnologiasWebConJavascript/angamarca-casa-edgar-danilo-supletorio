import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LibroInterface} from "../../../../interfacees/libro-interface";
import {LibroRestServiceService} from "../../../../servicios/Autor-Rest/libro-rest-service.service";

@Component({
  selector: 'app-libro-actualizar',
  templateUrl: './libro-actualizar.component.html',
  styleUrls: ['./libro-actualizar.component.scss']
})
export class LibroActualizarComponent implements OnInit {

  objetoActualizar : LibroInterface;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _objetoRest: LibroRestServiceService,
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
              (obj:LibroInterface) => {
                this.objetoActualizar = obj;
              }
            );
        }
      );
  }

  actualizar(objetoAc: LibroInterface) {
    if(objetoAc.idAutor==="")
      objetoAc.idAutor = null;
    const objeto$ = this._objetoRest.updateOneById(objetoAc);
    objeto$.subscribe(
      (m) => this._route.navigate((['/Usuario/libroVisualizar']))
    )
  }
}
