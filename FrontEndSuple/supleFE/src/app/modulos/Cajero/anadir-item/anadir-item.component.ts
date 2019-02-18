import { Component, OnInit } from '@angular/core';
import {LibroInterface} from "../../../interfacees/libro-interface";
import {FacturaDetalleInterface} from "../../../interfacees/factura-detalle-interface";
import {FacturaDetalleRestServiceService} from "../../../servicios/Factura-Detalle-Rest/factura-detalle-rest-service.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FacturaCabeceraRestServiceService} from "../../../servicios/Factura-Cabecera-Rest/factura-cabecera-rest-service.service";
import {AutorInterface} from "../../../interfacees/autor-interface";
import {FacturaCabeceraInterface} from "../../../interfacees/factura-cabecera-interface";
import {EventoPorLibroInterface} from "../../../interfacees/evento-por-libro-interface";
import {EventoLibroRestService} from "../../../servicios/Evento-Libro-Rest/evento-libro-rest.service";
import {EventoInterface} from "../../../interfacees/evento-interface";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-anadir-item',
  templateUrl: './anadir-item.component.html',
  styleUrls: ['./anadir-item.component.scss']
})
export class AnadirItemComponent implements OnInit {

  libros: LibroInterface[] =[];
  idLibroseleccionado:string = "";
  facturaCabecera: FacturaCabeceraInterface = <FacturaCabeceraInterface>{};
  facturaDetalle:FacturaDetalleInterface= <FacturaDetalleInterface>{};
  eventoPorLibro: EventoPorLibroInterface[] = [];
  constructor(
    private readonly _facturaDetalleRest: FacturaDetalleRestServiceService,
    private readonly _route: Router,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _facturaCabeceraRest: FacturaCabeceraRestServiceService,
    private readonly _eventoPorLibroRest: EventoLibroRestService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activateRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const evento$ = this._facturaCabeceraRest.findById(parametros.id);
          evento$
            .subscribe(
              (obj:FacturaCabeceraInterface) => {
                this.facturaCabecera = obj;
                const evento = <EventoInterface>this.facturaCabecera.idEvento;
                const eventoslibro$ = this._eventoPorLibroRest.findAll();
                eventoslibro$.subscribe(
                  eve=> {
                    const eveLi = eve.filter(
                      l => {
                        const ev = <EventoInterface> l.idEvento;
                        if(ev.id === evento.id)
                          return l;
                      }
                    );
                    this.eventoPorLibro = eveLi;
                  }
                );
              }
            );
        }
      );


  }

  anadir(){
    var error = "";
    if(this.facturaDetalle.precio && this.facturaDetalle.catidad){
      if(this.idLibroseleccionado != "")
        this.facturaDetalle.idEventoPorLibro = <number> this.idLibroseleccionado;
      else
        error +="Ingrese el libro a comprar, "
      if(this.facturaDetalle.precio<0)
        error += "Ingrese un precio mayor a cero, ";
      if(this.facturaDetalle.catidad < 0)
        error+= " Ingrese una cantidad mayor a cero"
      if(error === ""){
        this.facturaDetalle.idFacturaCabecera = this.facturaCabecera.id;
        this.facturaDetalle.total = this.facturaDetalle.precio * this.facturaDetalle.catidad;
        const crear$ = this._facturaDetalleRest.create(this.facturaDetalle);
        crear$.subscribe(
          (m) => this._route.navigate(['/Cajero/facturacion/'+this.facturaCabecera.id]),
          (error)=> alert("No se a podido agregar el item, recargue la pagina")
        )
      }else
        alert(error);
    }else
      alert("Ingrese todos los datos");
  }

  seleccionarLibro(){
    if(this.idLibroseleccionado != ""){
      const eventoLibro = <EventoPorLibroInterface>this.eventoPorLibro.find( r=> r.id == this.idLibroseleccionado);
      this.facturaDetalle.precio = eventoLibro.precioBase;
    }
  }
}
