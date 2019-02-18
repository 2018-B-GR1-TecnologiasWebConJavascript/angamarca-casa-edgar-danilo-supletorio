import { Component, OnInit } from '@angular/core';
import {UsuarioInterface} from "../../../interfacees/usuario-interface";
import {RolInterface} from "../../../interfacees/rol-interface";
import {RolPorUsuarioInterface} from "../../../interfacees/rol-por-usuario-interface";
import {ActivatedRoute} from "@angular/router";
import {UsuarioRestServiceService} from "../../../servicios/Usuario-Rest/usuario-rest-service.service";
import {map} from "rxjs/operators";
import {RolRestServiceService} from "../../../servicios/Rol-Rest/rol-rest-service.service";

@Component({
  selector: 'app-actualizar-roles-usuario',
  templateUrl: './actualizar-roles-usuario.component.html',
  styleUrls: ['./actualizar-roles-usuario.component.scss']
})
export class ActualizarRolesUsuarioComponent implements OnInit {

  usuario:UsuarioInterface = <UsuarioInterface>{};
  rolSe:String = "";
  rolesUsuario:RolInterface[] = [];
  listRoles: RolInterface[] = [];
  rolesUsuarioAux:RolPorUsuarioInterface[] = [];
  constructor(
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _usuarioRest: UsuarioRestServiceService,
    private readonly _rolrest: RolRestServiceService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const usuario$ = this._usuarioRest.findOneById(parametros.idUsuario);
          const roles$ = this._rolrest.findAllRoles();
          const rolesUsuario$ = this._rolrest.findAllRolesById(parametros.idUsuario);
          const rolesUser$ = rolesUsuario$.pipe(
            map(r => r.map( r1 => r1.idRol))
          );

          rolesUsuario$.subscribe(
            (roles:RolPorUsuarioInterface[]) => this.rolesUsuarioAux = roles
          );

          rolesUser$.subscribe(
            (rol:RolInterface[]) => this.rolesUsuario = rol
          );

          roles$.subscribe(
            (r:RolInterface[])=> this.listRoles = r
          );

          usuario$.subscribe(
            (usuario: UsuarioInterface) => this.usuario = usuario
          );
        }
      );
  }

  eliminar(id: number | string){
    const rol:number =  this.rolesUsuario.findIndex( (rol) => rol.id == id);
    this._usuarioRest.eliminarrolid(this.rolesUsuarioAux[rol].id);
    this.rolesUsuario.splice(rol,1);
    this.rolesUsuarioAux.splice(rol,1);
  }

  ejecutar(){
    if(this.rolSe != ""){
      if(this.rolesUsuario.length > 0){
        if(this.rolesUsuario.find(rol => rol.nombre === this.rolSe)){
          alert("ERROR ESE USUARIO YA TIENE ESE ROL");
        }else{
          const nueRol$ = this._usuarioRest.agregarRolUser(this.listRoles.find((rol) => rol.nombre === this.rolSe).id,this.usuario.id);
          nueRol$.subscribe(
            (r:RolPorUsuarioInterface) => {
              this.rolesUsuarioAux.push(r)
              this.rolesUsuario.push(
                <RolInterface>(r.idRol)
              );
            }
          );
        }
      }else{
        const nueRol$ = this._usuarioRest.agregarRolUser(this.listRoles.find((rol) => rol.nombre === this.rolSe).id,this.usuario.id);
        nueRol$.subscribe(
          (r:RolPorUsuarioInterface) => {
            this.rolesUsuarioAux.push(r)
            this.rolesUsuario.push(
              <RolInterface>(r.idRol)
            );
          }
        );
      }
    }else
      alert("ERROR ESE USUARIO YA TIENE ESE ROL");
  }
}
