import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ValidacionesServiceService} from "../../Validar/validaciones-service.service";
import {EventoInterface} from "../../interfacees/evento-interface";

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.scss']
})
export class FormularioEventoComponent implements OnInit {

  evento = <EventoInterface>{};
  nombreButton: string = " ";

  @Input()
  eventoAux: EventoInterface;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();

  constructor(
    private readonly _validacion: ValidacionesServiceService
  ) { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.eventoAux != null)
      this.evento = JSON.parse(JSON.stringify(this.eventoAux));
  }

  emitirFormulario(){
    var error: string = "";
    if(!this._validacion.soloLetras(this.evento.nombre))
      error += "Ingrese solo letras en el nombre, ";
    if(!this._validacion.validarFechaMayor(this.evento.fecha))
      error += "Fecha incorrecta, deberia ser mayor a la fecha actual, ";
    if(error === "")
      this.formularioValido.emit(this.evento);
    else
      alert(error)
  }
}
