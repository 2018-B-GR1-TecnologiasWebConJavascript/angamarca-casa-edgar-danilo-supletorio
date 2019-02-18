import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ValidacionesServiceService} from "../../Validar/validaciones-service.service";
import {LibroInterface} from "../../interfacees/libro-interface";
import {AutorInterface} from "../../interfacees/autor-interface";
import {isObject} from "rxjs/internal-compatibility";
import {AutorRestServiceService} from "../../servicios/Autor-Rest/autor-rest-service.service";

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.scss']
})
export class FormularioLibroComponent implements OnInit {

  libro = <LibroInterface>{};
  autores: AutorInterface[] = [];
  idObjAux:string = "";
  nombreButton: string = " ";

  @Input()
  libroAux: LibroInterface;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();
  constructor(
    private readonly _validacion: ValidacionesServiceService,
    private readonly _objetoRestAux: AutorRestServiceService
  ) { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.libroAux != null){
      this.libro = JSON.parse(JSON.stringify(this.libroAux));
      if(isObject(this.libro.idAutor)){
        const autor : AutorInterface = <AutorInterface>this.libro.idAutor;
        this.libro.idAutor = autor.id;
        this.idObjAux = <string> autor.id;
      }
    }
    const obje$ = this._objetoRestAux.findAll();
    obje$.subscribe(
      (p) => this.autores = p
    );

  }

  emitirFormulario(){
    var error: string = "";
    if(!this._validacion.soloLetras(this.libro.nombre))
      error += "Ingrese solo letras en el nombre del libro, ";
    if(!this._validacion.soloLetras(this.libro.nombreEditorial))
      error += "Ingrese solo letras en el nombre de la editorial, ";
    if(this.libro.numeroPaginas && this.libro.numeroPaginas<0)
      error+= "Ingrese un numero de paginas valido, ";
    if(this.libro.edicion && this.libro.edicion<0)
      error+= "Ingrese un numero de edicion valido, ";
    if(this.libro.idAutor === "")
      error+= "Ingrese el Autor del Libro";
    if(error === "")
      this.formularioValido.emit(this.libro);
    else
      alert(error)
  }

  agreagrPaciente(){
    this.libro.idAutor = this.idObjAux;
  }

}
