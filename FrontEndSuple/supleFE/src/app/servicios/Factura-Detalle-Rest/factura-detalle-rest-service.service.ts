import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {FacturaDetalleInterface} from "../../interfacees/factura-detalle-interface";

@Injectable({
  providedIn: 'root'
})
export class FacturaDetalleRestServiceService {

  private nombreModelo: string = "/FacturaDetalle";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }
  findAll(): Observable<FacturaDetalleInterface[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <FacturaDetalleInterface[]> r));
  }

  delete(id: number | string): Observable<FacturaDetalleInterface> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <FacturaDetalleInterface> r));
  }

  create(objeto:FacturaDetalleInterface): Observable<FacturaDetalleInterface> {
    console.log(objeto);
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <FacturaDetalleInterface> r));
  }

  findById(id: number | string): Observable<FacturaDetalleInterface> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <FacturaDetalleInterface> r));
  }
}
