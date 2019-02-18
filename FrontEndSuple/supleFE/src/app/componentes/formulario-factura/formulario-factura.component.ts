import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacturaCabeceraInterface} from "../../interfacees/factura-cabecera-interface";
import {FacturaDetalleInterface} from "../../interfacees/factura-detalle-interface";
import {EventoInterface} from "../../interfacees/evento-interface";
import {ValidacionesServiceService} from "../../Validar/validaciones-service.service";
import {FormsModule} from "@angular/forms";
import {FacturaDetalleRestServiceService} from "../../servicios/Factura-Detalle-Rest/factura-detalle-rest-service.service";
import {AutorInterface} from "../../interfacees/autor-interface";
import {FacturaCabeceraRestServiceService} from "../../servicios/Factura-Cabecera-Rest/factura-cabecera-rest-service.service";

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.scss']
})
export class FormularioFacturaComponent implements OnInit {

  facturaCabecera: FacturaCabeceraInterface = <FacturaCabeceraInterface> {};
  facturaDetalle: FacturaDetalleInterface[] = [];
  esCajero:boolean;
  idTextoSelec:string = "";

  @Input()
  facturaAux: FacturaCabeceraInterface;

  @Input()
  cajeroAux: boolean;

  @Output()
  formularioValido = new EventEmitter();

  constructor(
    private readonly _validacion: ValidacionesServiceService,
    private readonly _facturaDetalleRest: FacturaDetalleRestServiceService,
    private readonly _facturaCabeceraRest: FacturaCabeceraRestServiceService
  ) { }

  ngOnInit() {
    this.esCajero = this.cajeroAux;
    if(this.facturaAux != null){
      this.facturaCabecera = JSON.parse(JSON.stringify(this.facturaAux));
      if(this.facturaCabecera.estado === "Pagado")
        this.esCajero = false;
      const evento = <EventoInterface>this.facturaCabecera.idEvento;
      const detalles$ = this._facturaDetalleRest.findAll();
      detalles$.subscribe(
        det=>{
          const detal = det.filter(
            e=>{
              const as = <FacturaCabeceraInterface>e.idFacturaCabecera;
              if(as.id === this.facturaCabecera.id)
                return e;
            }
          );
          this.facturaDetalle = detal;
          this.facturaDetalle.forEach(m => this.facturaCabecera.total += m.total);
          const facturaActu$ = this._facturaCabeceraRest.updateOneById(this.facturaCabecera);
          facturaActu$.subscribe(
            l=> l
          );
        }
      )
    }
  }

  emitirFormulario(){
    this.facturaCabecera.estado = "Pagado";
    this.esCajero = false;
    this.guarDarDatos();
  }

  guarDarDatos(){
    console.log(this.idTextoSelec);
    var error: string = "";
    if(error === "")
      this.formularioValido.emit(this.facturaCabecera);
    else
      alert(error)
  }

  eliminar(id:number|string){
    const eliminar$ = this._facturaDetalleRest.delete(id);
    eliminar$.subscribe(
      (eliminado:FacturaDetalleInterface) => {
        const indice = this.facturaDetalle.findIndex( u => u.id == eliminado.id);
        this.facturaCabecera.total = this.facturaCabecera.total - this.facturaDetalle[indice].total;
        const facturaActu$ = this._facturaCabeceraRest.updateOneById(this.facturaCabecera);
        facturaActu$.subscribe(
          l=> this.facturaDetalle.splice(indice,1)
        )
      }
    )
  }
}
