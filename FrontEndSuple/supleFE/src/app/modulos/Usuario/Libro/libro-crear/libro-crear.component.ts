import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LibroRestServiceService} from "../../../../servicios/Autor-Rest/libro-rest-service.service";
import {LibroInterface} from "../../../../interfacees/libro-interface";

@Component({
  selector: 'app-libro-crear',
  templateUrl: './libro-crear.component.html',
  styleUrls: ['./libro-crear.component.scss']
})
export class LibroCrearComponent implements OnInit {

  constructor(
    private readonly _objetoRest: LibroRestServiceService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  crear(objeto:LibroInterface){
    const objeto$ = this._objetoRest.create(objeto);
    objeto$.subscribe(
      (m)=> this._router.navigate((['/Usuario/libroVisualizar']))
    );
  }

}
