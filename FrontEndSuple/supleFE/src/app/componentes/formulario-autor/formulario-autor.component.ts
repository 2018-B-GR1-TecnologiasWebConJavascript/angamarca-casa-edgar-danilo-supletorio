import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AutorInterface} from "../../interfacees/autor-interface";
import {ValidacionesServiceService} from "../../Validar/validaciones-service.service";

@Component({
  selector: 'app-formulario-autor',
  templateUrl: './formulario-autor.component.html',
  styleUrls: ['./formulario-autor.component.scss']
})
export class FormularioAutorComponent implements OnInit {

  autor = <AutorInterface>{};
  nombreButton: string = " ";

  @Input()
  autorAux: AutorInterface;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();
  constructor(
    private readonly _validacion: ValidacionesServiceService
  ) { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.autorAux != null)
      this.autor = JSON.parse(JSON.stringify(this.autorAux));
  }

  emitirFormulario(){
    var error: string = "";
    if(!this._validacion.soloLetras(this.autor.nombres))
      error += "Ingrese solo letras en el nombre, ";
    if(!this._validacion.soloLetras(this.autor.apellidos))
      error += "Ingrese solo letras en el apellido, ";
    if(this.autor.fechaNacimiento && !this._validacion.validarFechaMenor(this.autor.fechaNacimiento))
      error += "Fecha incorrecta, deberia ser inferior a la fecha actual, ";
    if(this.autor.numeroLibros && this.autor.numeroLibros<0)
      error+="Ingrese un numero de libro valido, ";
    if(error === "")
      this.formularioValido.emit(this.autor);
    else
      alert(error)
  }
}
