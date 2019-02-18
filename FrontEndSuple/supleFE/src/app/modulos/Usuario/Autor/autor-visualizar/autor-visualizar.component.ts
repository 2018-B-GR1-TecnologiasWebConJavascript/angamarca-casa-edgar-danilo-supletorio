import { Component, OnInit } from '@angular/core';
import {ValidacionesServiceService} from "../../../../Validar/validaciones-service.service";
import {Router} from "@angular/router";
import {AutorInterface} from "../../../../interfacees/autor-interface";
import {AutorRestServiceService} from "../../../../servicios/Autor-Rest/autor-rest-service.service";

@Component({
  selector: 'app-autor-visualizar',
  templateUrl: './autor-visualizar.component.html',
  styleUrls: ['./autor-visualizar.component.scss']
})
export class AutorVisualizarComponent implements OnInit {

  autores: AutorInterface[] = [];
  autoresAux: AutorInterface[] = [];
  error:string = null;
  textoBuscar = "";
  constructor(
    private readonly validacionService: ValidacionesServiceService,
    private readonly objetoRest: AutorRestServiceService,
    private readonly _route:Router
  ) { }

  ngOnInit() {
    const usuario$ = this.objetoRest.findAll();
    usuario$.subscribe(
      (usuario:AutorInterface[])=> {
        this.autores = usuario;
        this.autoresAux = usuario;
      }
    );
  }
  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.soloLetras(this.textoBuscar)){
        this.error="";
        this.autores = this.autoresAux.filter((u) => u.nombres.indexOf(this.textoBuscar) != -1);
      }else
        this.error="Ingrese un nombre valido (solo letras)";
    }else{
      this.autores = JSON.parse(JSON.stringify(this.autoresAux));
      this.error = "";
    }
  }

  eliminar(id:number|string){
    const eliminar$ = this.objetoRest.delete(id);
    eliminar$.subscribe(
      (eliminado:AutorInterface) => {
        const indice = this.autoresAux.findIndex( u => u.id == eliminado.id);
        this.autoresAux.splice(indice,1);
        this.autores = JSON.parse(JSON.stringify(this.autoresAux));
      }
    )
  }

}
