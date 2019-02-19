import { Component, OnInit } from '@angular/core';
import {UsuarioInterface} from "../../../interfacees/usuario-interface";
import {ValidacionesServiceService} from "../../../Validar/validaciones-service.service";
import {RolInterface} from "../../../interfacees/rol-interface";
import {AutenticacionServiceService} from "../../../servicios/Autenticarse/autenticacion-service.service";
import {Router} from "@angular/router";
import {RolPorUsuarioInterface} from "../../../interfacees/rol-por-usuario-interface";

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  error:string = "";
  Usuario:UsuarioInterface = <UsuarioInterface>{};
  constructor(
    private readonly validarRest:ValidacionesServiceService,
    private readonly _autenticarService: AutenticacionServiceService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("SupleUser") != 'null' ){
      const roles = this._autenticarService.RolesById(localStorage.getItem("SupleUser"));
      roles.subscribe(
        (rol:RolPorUsuarioInterface[]) =>
        {
          if(rol.length>0){
            if(rol.find(r=> <number> r.idRol === 1))
              this._router.navigate((['/Administrador']));
            else
            if(rol.find(r=> <number>r.idRol === 2))
              this._router.navigate((['/Usuario']));
            else
            if(rol.find(r=> <number>r.idRol === 3))
              this._router.navigate((['/Cliente']));
            else
            if(rol.find(r=> <number>r.idRol === 4))
              this._router.navigate((['/Cajero']));
            else{
              alert("Espere a que el administrador le acepte en algun rol del sistema");
              localStorage.setItem('SupleUser', null);
              this._router.navigate((['/login']));
            }
          }else{
            alert("Espere a que el administrador le acepte en algun rol");
            localStorage.setItem('SupleUser', null);
            this._router.navigate((['/login']));
          }
        }
      );
    }
  }

  login(){
    this.error = "";
    if(!this.validarRest.correoElectronico(this.Usuario.correo))
      this.error += "ingrese un correo electronico valido\n";
    if(this.Usuario.password.length<8 || this.Usuario.password.length>16)
      this.error += "Ingrese una contrasena valida";
    if(!this.validarRest.letraMinuscula(this.Usuario.password) ||
      !this.validarRest.letraMayuscula(this.Usuario.password) ||
      !this.validarRest.numeros(this.Usuario.password) ||
      !this.validarRest.caracteresEspeciales(this.Usuario.password)){
      this.error += "la contrasena debe tener una letra minuscula, mayuscula, un numero y un caracter especial";
    }
    if(!this.error){
      const autenticacion$ = this._autenticarService.Login(this.Usuario.correo,this.Usuario.password);
      autenticacion$.subscribe(
        (u:UsuarioInterface[]) =>{
          if(u.length>0) {
            this.Usuario = u[0];
            localStorage.setItem('SupleUser', String(this.Usuario.id));
            const roles = this._autenticarService.RolesById(this.Usuario.id);
            roles.subscribe(
              (rol:RolPorUsuarioInterface[]) =>
              {
                if(rol.length>0){
                  if(rol.find(r=> <number>r.idRol === 1))
                    this._router.navigate((['/Administrador']));
                  else
                  if(rol.find(r=> <number>r.idRol === 2))
                    this._router.navigate((['/Usuario']));
                  else
                  if(rol.find(r=> <number>r.idRol === 3))
                    this._router.navigate((['/Cliente']));
                  else
                  if(rol.find(r=> <number>r.idRol === 4))
                    this._router.navigate((['/Cajero']));
                  else{
                    alert("Espere a que el administrador le acepte en algun rol del sistema");
                    localStorage.setItem('SupleUser', null);
                    this._router.navigate((['/login']));
                  }
                }else{
                  alert("Espere a que el administrador le acepte en algun rol");
                  localStorage.setItem('SupleUser', null);
                  this._router.navigate((['/login']));
                }
              }
            );
          }else{
            alert("error en la contrasena o password");
            localStorage.setItem('SupleUser', null);
          }
        },
        (error) => localStorage.setItem('SupleUser', null)
      );
    }

  }
}
