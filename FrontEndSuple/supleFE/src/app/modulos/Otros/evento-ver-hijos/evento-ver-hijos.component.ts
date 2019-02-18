import { Component, OnInit } from '@angular/core';
import {LibroInterface} from "../../../interfacees/libro-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {EventoRestServiceService} from "../../../servicios/Evento-Rest/evento-rest-service.service";
import {LibroRestServiceService} from "../../../servicios/Autor-Rest/libro-rest-service.service";
import {filter, filter, map} from "rxjs/operators";
import {EventoInterface} from "../../../interfacees/evento-interface";
import {EventoPorLibroInterface} from "../../../interfacees/evento-por-libro-interface";

@Component({
  selector: 'app-evento-ver-hijos',
  templateUrl: './evento-ver-hijos.component.html',
  styleUrls: ['./evento-ver-hijos.component.scss']
})
export class EventoVerHijosComponent implements OnInit {

  libros: LibroInterface[] = [];
  nombreEvento:string = "";
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _eventoRest: EventoRestServiceService,
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const libros$ = this._eventoRest.findhijosEvento();
          const evento$ =  this._eventoRest.findById(parametros.id);
          evento$.subscribe(
            (eve) => this.nombreEvento = eve.nombre
          );
          libros$.subscribe(
            (m:EventoPorLibroInterface[])=>{
              const obj = m.filter(
                a => {
                  const b = <EventoInterface> a.idEvento;
                  try{
                    if(b.id == parametros.id){
                      return a;
                    }
                  }catch (e) {

                  }
                }
              );
              this.libros = obj.map( m => <LibroInterface> m.idLibro);
            }
          )
        }
      );
  }

}
