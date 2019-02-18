import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AutorInterface} from "../../interfacees/autor-interface";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AutorRestServiceService {

  private nombreModelo: string = "/Autor";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<AutorInterface[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <AutorInterface[]> r));
  }

  delete(id: number | string): Observable<AutorInterface> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <AutorInterface> r));
  }

  create(objeto:AutorInterface): Observable<AutorInterface> {
    objeto.idUsuario = localStorage.getItem("SupleUser");
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <AutorInterface> r));
  }

  findById(id: number | string): Observable<AutorInterface> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <AutorInterface> r));
  }

  updateOneById(objeto:AutorInterface) {
    const url = environment.url + this.nombreModelo
      + '/' + objeto.id;
    const obj=<AutorInterface>{};
    obj.nombres = objeto.nombres;
    obj.apellidos = objeto.apellidos;
    obj.ecuatoriano = objeto.ecuatoriano;
    obj.fechaNacimiento = objeto.fechaNacimiento;
    obj.numeroLibros = objeto.numeroLibros;
    return this._httpClient
      .put(url, obj)
      .pipe(map(r => <object> r));
  }
}
