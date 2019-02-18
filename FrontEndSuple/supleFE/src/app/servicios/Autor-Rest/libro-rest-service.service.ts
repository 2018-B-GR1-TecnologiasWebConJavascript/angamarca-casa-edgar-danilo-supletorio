import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {LibroInterface} from "../../interfacees/libro-interface";

@Injectable({
  providedIn: 'root'
})
export class LibroRestServiceService {

  private nombreModelo: string = "/Libro";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<LibroInterface[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <LibroInterface[]> r));
  }

  delete(id: number | string): Observable<LibroInterface> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <LibroInterface> r));
  }

  create(objeto:LibroInterface): Observable<LibroInterface> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <LibroInterface> r));
  }

  findById(id: number | string): Observable<LibroInterface> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <LibroInterface> r));
  }

  updateOneById(objeto:LibroInterface) {
    const url = environment.url + this.nombreModelo
      + '/' + objeto.id;
    const obj=<LibroInterface>{};
    obj.edicion = objeto.edicion;
    obj.fechaPublicacion = objeto.fechaPublicacion;
    obj.nombre = objeto.nombre;
    obj.nombreEditorial = objeto.nombreEditorial;
    obj.numeroPaginas = objeto.numeroPaginas;
    obj.idAutor = objeto.idAutor;
    return this._httpClient
      .put(url, obj)
      .pipe(map(r => <object> r));
  }
}
