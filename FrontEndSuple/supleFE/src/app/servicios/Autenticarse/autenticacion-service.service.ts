import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsuarioInterface} from "../../interfacees/usuario-interface";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {RolPorUsuarioInterface} from "../../interfacees/rol-por-usuario-interface";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionServiceService {

  nombreModelo="/Usuario/login";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  Login(username: String , pass: String):Observable<UsuarioInterface[]>{
    const Objeto ={
      correo: username,
      password: pass
    };
    //console.log(Objeto);
    const usuarios$ = this._httpClient
      .post(environment.url + this.nombreModelo,Objeto)
      .pipe(map(u => <UsuarioInterface[]> u));
    return usuarios$;
  }

  RolesById(id: String | number):Observable<RolPorUsuarioInterface[]>{
    const objeto ={
      id: id
    };
    const roles$ = this._httpClient
      .post(environment.url+"/RolPorUsuario/rolesUsuarioById",objeto)
      .pipe(map((u:RolPorUsuarioInterface[])   => u ));
    return roles$;
  }
}
