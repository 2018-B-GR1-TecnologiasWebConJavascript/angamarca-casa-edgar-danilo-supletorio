import { Component, OnInit } from '@angular/core';
import {ValidacionesServiceService} from "../../../Validar/validaciones-service.service";
import {Router} from "@angular/router";
import {FacturaCabeceraRestServiceService} from "../../../servicios/Factura-Cabecera-Rest/factura-cabecera-rest-service.service";
import {FacturaCabeceraInterface} from "../../../interfacees/factura-cabecera-interface";
import {UsuarioInterface} from "../../../interfacees/usuario-interface";

@Component({
  selector: 'app-cajerofacturas',
  templateUrl: './cajerofacturas.component.html',
  styleUrls: ['./cajerofacturas.component.scss']
})
export class CajerofacturasComponent implements OnInit {

  facturas: FacturaCabeceraInterface[] = [];
  facturasAux: FacturaCabeceraInterface[] = [];
  error:string = null;
  textoBuscar = "";
  textoBuscarEstado = "";
  constructor(
    private readonly validacionService: ValidacionesServiceService,
    private readonly _facturaRest: FacturaCabeceraRestServiceService,
    private readonly _route:Router
  ) {  }

  ngOnInit() {
    const usuario$ = this._facturaRest.findAll();
    usuario$.subscribe(
      (u:FacturaCabeceraInterface[])=> {
        this.facturas = u;
        this.facturasAux = u;
      }
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.soloLetras(this.textoBuscar)){
        this.error="";
        if (this.validacionService.soloLetras(this.textoBuscar)){
          this.facturas = this.facturasAux.filter((u) => {
            const usu = <UsuarioInterface> u.idUsuario
            if(usu.nombre.indexOf(this.textoBuscar) != -1)
              return u;
          });
        }
      }else
        this.error="Ingrese un nombre valido, solo letras";
    }else{
      this.facturas = JSON.parse(JSON.stringify(this.facturasAux));
      this.error = "";
    }
  }

  filtarPorEstado(){
    if(this.textoBuscarEstado != ""){
      this.facturas = this.facturasAux.filter((u) => u.estado === this.textoBuscarEstado);
    }else
      this.facturas = JSON.parse(JSON.stringify(this.facturasAux));
  }

}
