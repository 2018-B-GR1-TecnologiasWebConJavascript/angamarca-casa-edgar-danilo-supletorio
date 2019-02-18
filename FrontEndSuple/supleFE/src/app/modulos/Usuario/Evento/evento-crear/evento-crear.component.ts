import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventoRestServiceService} from "../../../../servicios/Evento-Rest/evento-rest-service.service";
import {AutorInterface} from "../../../../interfacees/autor-interface";
import {EventoInterface} from "../../../../interfacees/evento-interface";

@Component({
  selector: 'app-evento-crear',
  templateUrl: './evento-crear.component.html',
  styleUrls: ['./evento-crear.component.scss']
})
export class EventoCrearComponent implements OnInit {

  constructor(
    private readonly _objetoRest: EventoRestServiceService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  crear(objeto:EventoInterface){
    const objeto$ = this._objetoRest.create(objeto);
    objeto$.subscribe(
      (m)=> this._router.navigate((['/Usuario/eventoVisualizar']))
    );
  }

}
