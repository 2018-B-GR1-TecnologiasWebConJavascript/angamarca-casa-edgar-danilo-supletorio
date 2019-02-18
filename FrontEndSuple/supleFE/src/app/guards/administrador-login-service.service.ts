import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AutenticacionServiceService} from "../servicios/Autenticarse/autenticacion-service.service";
import {RolPorUsuarioInterface} from "../interfacees/rol-por-usuario-interface";

@Injectable({
  providedIn: 'root'
})
export class AdministradorLoginServiceService implements CanActivate{

  constructor(
    private readonly _autenticacionUsuario: AutenticacionServiceService,
    private readonly _route: Router
  ) { }

  canActivate(): boolean {
    if(localStorage.getItem("SupleUser") != 'null'){
      const roles = this._autenticacionUsuario.RolesById(localStorage.getItem("SupleUser"));
      roles.subscribe(
        (rol:RolPorUsuarioInterface[]) =>
        {
          if(rol.length>0){
            if(rol.find(r=> <number>r.idRol ===1)){
              return true;
            }
            else{
              this._route.navigate((['/login']));
              return false;
            }
          }else{
            this._route.navigate((['/login']));
            return false;
          }
        }
      );
    }else{
      this._route.navigate((['/login']));
      return false;
    }
    return true;
  }
}
