import { Component, OnInit } from '@angular/core';
import {RolPorUsuarioInterface} from "../../../interfacees/rol-por-usuario-interface";
import {AutenticacionServiceService} from "../../../servicios/Autenticarse/autenticacion-service.service";
import {Router} from "@angular/router";
import {UsuarioInterface} from "../../../interfacees/usuario-interface";
import {ValidacionesServiceService} from "../../../Validar/validaciones-service.service";
import {UsuarioRestServiceService} from "../../../servicios/Usuario-Rest/usuario-rest-service.service";

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario:UsuarioInterface = <UsuarioInterface>{};
  error:string = "";
  constructor(
    private readonly _autenticarService: AutenticacionServiceService,
    private readonly _router: Router,
    private readonly _validacion: ValidacionesServiceService,
    private readonly _usuarioRest: UsuarioRestServiceService
  ) { }

  ngOnInit() {
    if(localStorage.getItem("SupleUser") != 'null' ){
      const roles = this._autenticarService.RolesById(localStorage.getItem("SupleUser"));
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
    }
  }

  registarse(){
    this.error = "";
    if(!this._validacion.correoElectronico(this.usuario.correo))
      this.error += " Ingrese un correo valido, ";
    if(!this._validacion.soloLetras(this.usuario.nombre))
      this.error += "ingrese solo letras en el nombre, "
    if(!this._validacion.validarFechaMenor(this.usuario.fechaNacimiento))
      this.error += " La fecha debe ser menos a la fecha actual, ";
    if(!this._validacion.letraMinuscula(this.usuario.password) ||
      !this._validacion.letraMayuscula(this.usuario.password) ||
      !this._validacion.numeros(this.usuario.password) ||
      !this._validacion.caracteresEspeciales(this.usuario.password)){
      this.error += "la contrasena debe tener una letra minuscula, mayuscula, un numero y un caracter especial";
    }
    if(!this.error) {
      const usuario$ = this._usuarioRest.create(this.usuario);
      usuario$.subscribe(
        (user) => this._router.navigate((['login'])),
        (error)=> alert("No se pudo registar el usuario, pruebe con otro correo")
      );
    }
  }
}
