import { Component, OnInit } from '@angular/core';
import {AutorInterface} from "../../../../interfacees/autor-interface";
import {AutorRestServiceService} from "../../../../servicios/Autor-Rest/autor-rest-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-autor-crear',
  templateUrl: './autor-crear.component.html',
  styleUrls: ['./autor-crear.component.scss']
})
export class AutorCrearComponent implements OnInit {

  constructor(
    private readonly _objetoRest: AutorRestServiceService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  crear(objeto:AutorInterface){
    const objeto$ = this._objetoRest.create(objeto);
    objeto$.subscribe(
      (m)=> this._router.navigate((['/Usuario/autorVisualizar']))
    );
  }
}
