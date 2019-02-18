import { Component, OnInit } from '@angular/core';
import {ValidacionesServiceService} from "../../../Validar/validaciones-service.service";
import {Router} from "@angular/router";
import {EventoInterface} from "../../../interfacees/evento-interface";
import {EventoRestServiceService} from "../../../servicios/Evento-Rest/evento-rest-service.service";
import {RolPorUsuarioInterface} from "../../../interfacees/rol-por-usuario-interface";
import {AutenticacionServiceService} from "../../../servicios/Autenticarse/autenticacion-service.service";
import {FacturaCabeceraRestServiceService} from "../../../servicios/Factura-Cabecera-Rest/factura-cabecera-rest-service.service";
import {FacturaCabeceraInterface} from "../../../interfacees/factura-cabecera-interface";

@Component({
  selector: 'app-evento-visualizar',
  templateUrl: './evento-visualizar.component.html',
  styleUrls: ['./evento-visualizar.component.scss']
})
export class EventoVisualizarComponent implements OnInit {

  eventos: EventoInterface[] = [];
  eventosAux: EventoInterface[] = [];
  error:string = null;
  textoBuscar = "";
  esUsuario: boolean = false;
  esCajero:boolean = false;

  constructor(
    private readonly validacionService: ValidacionesServiceService,
    private readonly objetoRest: EventoRestServiceService,
    private readonly _route:Router,
    private readonly _autenticacionUsuario: AutenticacionServiceService,
    private readonly _facturaCabeceraRest: FacturaCabeceraRestServiceService
  ) { }

  ngOnInit() {
    const obj$ = this.objetoRest.findAll();
    obj$.subscribe(
      (u:EventoInterface[])=> {
        this.eventos = u;
        this.eventosAux = u;
      }
    );
    const roles = this._autenticacionUsuario.RolesById(localStorage.getItem("SupleUser"));
    roles.subscribe(
      (rol:RolPorUsuarioInterface[]) =>
      {
        if(rol.length>0){
          if(rol.find(r=> <number>r.idRol === 2)){
            this.esUsuario = true;
          }
          if(rol.find(r=> <number>r.idRol === 4)){
            this.esCajero= true;
          }
        }else{
          this.esUsuario = false;
        }
      },
      (error) => this.esUsuario = false
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.soloLetras(this.textoBuscar)){
        this.error="";
        this.eventos = this.eventosAux.filter((u) => u.nombre.indexOf(this.textoBuscar) != -1);
      }else
        this.error="Ingrese un nombre valido (solo letras)";
    }else{
      this.eventos = JSON.parse(JSON.stringify(this.eventosAux));
      this.error = "";
    }
  }

  gestionFactura(id: number | string ){
    var elemento:FacturaCabeceraInterface = <FacturaCabeceraInterface>{};
    elemento.idUsuario = localStorage.getItem("SupleUser");
    elemento.idEvento = id;
    const crear$ = this._facturaCabeceraRest.create(elemento);
    crear$.subscribe(
      eve => this._route.navigate(['/Cajero/facturacion/'+eve.id])
    );
  }

}
