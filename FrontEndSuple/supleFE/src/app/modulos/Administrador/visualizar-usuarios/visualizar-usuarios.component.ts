import { Component, OnInit } from '@angular/core';
import {UsuarioInterface} from "../../../interfacees/usuario-interface";
import {ValidacionesServiceService} from "../../../Validar/validaciones-service.service";
import {UsuarioRestServiceService} from "../../../servicios/Usuario-Rest/usuario-rest-service.service";
import {Router} from "@angular/router";
import {ClienteLoginServiceService} from "../../../guards/cliente-login-service.service";

@Component({
  selector: 'app-visualizar-usuarios',
  templateUrl: './visualizar-usuarios.component.html',
  styleUrls: ['./visualizar-usuarios.component.scss']
})
export class VisualizarUsuariosComponent implements OnInit {

  Usuarios: UsuarioInterface[] = [];
  UsuariosAux: UsuarioInterface[] = [];
  error:string = null;
  textoBuscar = "";
  constructor(
    private readonly validacionService: ValidacionesServiceService,
    private readonly usuarioRest: UsuarioRestServiceService,
    private readonly _route:Router
  ) { }

  ngOnInit() {
    const usuario$ = this.usuarioRest.findAll();
    usuario$.subscribe(
      (usuario:UsuarioInterface[])=> {
        this.Usuarios = usuario;
        this.UsuariosAux = usuario;
      }
    );
  }

  buscarTexto(){
    if(this.textoBuscar!=""){
      if(this.validacionService.correoElectronico(this.textoBuscar) || this.validacionService.soloLetras(this.textoBuscar)){
        this.error="";
        if(this.validacionService.correoElectronico(this.textoBuscar)){
          this.Usuarios = this.UsuariosAux.filter((usuario) => usuario.correo.indexOf(this.textoBuscar) != -1);
        }else
          if (this.validacionService.soloLetras(this.textoBuscar)){
            this.Usuarios = this.UsuariosAux.filter((usuario) => usuario.nombre.indexOf(this.textoBuscar) != -1);
          }
      }else
        this.error="Ingrese un correo o nombre valido";
    }else{
      this.Usuarios = JSON.parse(JSON.stringify(this.UsuariosAux));
      this.error = "";
    }
  }

  eliminar(id:number|string){
    const eliminar$ = this.usuarioRest.eliminar(id);
    eliminar$.subscribe(
      (eliminado:UsuarioInterface) => {
        const indice = this.UsuariosAux.findIndex( u => u.id == eliminado.id);
        this.UsuariosAux.splice(indice,1);
        this.Usuarios = JSON.parse(JSON.stringify(this.UsuariosAux));
      }
    )
  }

  salir(){
    localStorage.setItem('SupleUser', null);
    this._route.navigate((['/login']));
  }
}
