import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {FacturaCabeceraInterface} from "../../interfacees/factura-cabecera-interface";
import objectContaining = jasmine.objectContaining;

@Injectable({
  providedIn: 'root'
})
export class FacturaCabeceraRestServiceService {

  private nombreModelo: string = "/FacturaCabecera";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<FacturaCabeceraInterface[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <FacturaCabeceraInterface[]> r));
  }

  delete(id: number | string): Observable<FacturaCabeceraInterface> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <FacturaCabeceraInterface> r));
  }

  create(objeto:FacturaCabeceraInterface): Observable<FacturaCabeceraInterface> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <FacturaCabeceraInterface> r));
  }

  findById(id: number | string): Observable<FacturaCabeceraInterface> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <FacturaCabeceraInterface> r));
  }

  updateOneById(objeto:FacturaCabeceraInterface) {
    const url = environment.url + this.nombreModelo
      + '/' + objeto.id;
    const obj=<FacturaCabeceraInterface>{};
    if(objeto.total)
      obj.total= objeto.total;
    if(objeto.estado)
      obj.estado = objeto.estado;
    if(objeto.direccion)
      obj.direccion = objeto.direccion;
    if(objeto.fecha)
      obj.fecha = objeto.fecha;
    if(objeto.correoElectronico)
      obj.correoElectronico = objeto.correoElectronico;
    if(objeto.telefono)
      obj.telefono = objeto.telefono;
    if(objeto.cedulaRuc)
      obj.cedulaRuc = objeto.cedulaRuc;
    obj.nombre = objeto.nombre;
    obj.tipoPago = objeto.tipoPago;
    return this._httpClient
      .put(url, obj)
      .pipe(map(r => <object> r));
  }
}
