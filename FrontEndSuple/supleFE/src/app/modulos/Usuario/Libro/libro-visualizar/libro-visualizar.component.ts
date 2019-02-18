import { Component, OnInit } from '@angular/core';
import {ValidacionesServiceService} from "../../../../Validar/validaciones-service.service";
import {Router} from "@angular/router";
import {LibroInterface} from "../../../../interfacees/libro-interface";
import {LibroRestServiceService} from "../../../../servicios/Autor-Rest/libro-rest-service.service";

@Component({
  selector: 'app-libro-visualizar',
  templateUrl: './libro-visualizar.component.html',
  styleUrls: ['./libro-visualizar.component.scss']
})
export class LibroVisualizarComponent implements OnInit {

  libros: LibroInterface[] = [];
  librosAux: LibroInterface[] = [];
  error:string = null;
  textoBuscar = "";
  constructor(
    private readonly validacionService: ValidacionesServiceService,
    private readonly objetoRest: LibroRestServiceService,
    private readonly _route:Router
  ) { }

  ngOnInit() {
    const usuario$ = this.objetoRest.findAll();
    usuario$.subscribe(
      (usuario:LibroInterface[])=> {
        this.libros = usuario;
        this.librosAux = usuario;
      }
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.soloLetras(this.textoBuscar)){
        this.error="";
        this.libros = this.librosAux.filter((u) => u.nombre.indexOf(this.textoBuscar) != -1);
      }else
        this.error="Ingrese un nombre valido (solo letras)";
    }else{
      this.libros = JSON.parse(JSON.stringify(this.librosAux));
      this.error = "";
    }
  }

  eliminar(id:number|string){
    const eliminar$ = this.objetoRest.delete(id);
    eliminar$.subscribe(
      (eliminado:LibroInterface) => {
        const indice = this.librosAux.findIndex( u => u.id == eliminado.id);
        this.librosAux.splice(indice,1);
        this.libros = JSON.parse(JSON.stringify(this.librosAux));
      }
    )
  }
}
