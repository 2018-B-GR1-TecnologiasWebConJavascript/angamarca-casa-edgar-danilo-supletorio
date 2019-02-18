import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RolInterface} from "../../interfacees/rol-interface";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {RolPorUsuarioInterface} from "../../interfacees/rol-por-usuario-interface";

@Injectable({
  providedIn: 'root'
})
export class RolRestServiceService {


  constructor(
    private readonly _httpClient: HttpClient
  ) { }
  findAllRoles(): Observable<RolInterface[]> {
    const usuarios$ = this._httpClient
      .get(environment.url + "/Rol")
      .pipe(map(u => <RolInterface[]> u));
    return usuarios$;
  }

  findAllRolesById(id: number|string): Observable<RolPorUsuarioInterface[]> {
    const objeto = {
      id: id
    };
    const usuarios$ = this._httpClient
      .post(environment.url + "/RolPorUsuario/rolesUsuario",objeto)
      .pipe(map(u => <RolPorUsuarioInterface[]> u));
    return usuarios$;
  }


}
