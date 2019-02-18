import { Injectable } from '@angular/core';
import {UsuarioInterface} from "../../interfacees/usuario-interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {RolPorUsuarioInterface} from "../../interfacees/rol-por-usuario-interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestServiceService {

  nombreModelo:String = '/Usuario';
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<UsuarioInterface[]> {
    const usuarios$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(u => <UsuarioInterface[]> u));
    return usuarios$;
  }

  findOneById(id: number | string): Observable<UsuarioInterface> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(u => <UsuarioInterface> u));
  }

  agregarRolUser(idRol: number |string, idUsuario: number|string):Observable<RolPorUsuarioInterface>{
    const url = environment.url + "/RolPorUsuario";
    const objeto = {
      idRol: idRol,
      idUsuario: idUsuario
    }
    return this._httpClient
      .post(url,objeto)
      .pipe(
        map(r => <RolPorUsuarioInterface>r)
      );
  }

  eliminarrolid(id: number |string){
    const url = environment.url + "/RolPorUsuario"
      + `/${id}`;
    console.log(url);
    this._httpClient
      .delete(url)
      .subscribe( u=> u);
  }

  eliminar(id: number |string):Observable<UsuarioInterface>{
    const asd = this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(
        map(u => <UsuarioInterface>u)
      );
    return asd;
  }

  create(usuario:UsuarioInterface): Observable<UsuarioInterface> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, usuario)
      .pipe(map(r => <UsuarioInterface> r));
  }
}
