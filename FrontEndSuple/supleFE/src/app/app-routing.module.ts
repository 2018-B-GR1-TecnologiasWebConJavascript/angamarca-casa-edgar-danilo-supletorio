import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisualizarUsuariosComponent} from "./modulos/Administrador/visualizar-usuarios/visualizar-usuarios.component";
import {ActualizarRolesUsuarioComponent} from "./modulos/Administrador/actualizar-roles-usuario/actualizar-roles-usuario.component";
import {LoginUsuarioComponent} from "./modulos/Otros/login-usuario/login-usuario.component";
import {RegistrarUsuarioComponent} from "./modulos/Otros/registrar-usuario/registrar-usuario.component";
import {UsuarioMainComponent} from "./modulos/Usuario/usuario-main/usuario-main.component";
import {CajeroMainComponent} from "./modulos/Cajero/cajero-main/cajero-main.component";
import {ClienteMainComponent} from "./modulos/Cliente/cliente-main/cliente-main.component";
import {AdministradorLoginServiceService} from "./guards/administrador-login-service.service";
import {UsuarioLoginServiceService} from "./guards/usuario-login-service.service";
import {CajeroLoginServiceeService} from "./guards/cajero-login-servicee.service";
import {ClienteLoginServiceService} from "./guards/cliente-login-service.service";
import {LibroVisualizarComponent} from "./modulos/Usuario/Libro/libro-visualizar/libro-visualizar.component";
import {LibroCrearComponent} from "./modulos/Usuario/Libro/libro-crear/libro-crear.component";
import {LibroActualizarComponent} from "./modulos/Usuario/Libro/libro-actualizar/libro-actualizar.component";
import {AutorActualizarComponent} from "./modulos/Usuario/Autor/autor-actualizar/autor-actualizar.component";
import {AutorCrearComponent} from "./modulos/Usuario/Autor/autor-crear/autor-crear.component";
import {AutorVisualizarComponent} from "./modulos/Usuario/Autor/autor-visualizar/autor-visualizar.component";
import {EventoVisualizarComponent} from "./modulos/Otros/evento-visualizar/evento-visualizar.component";
import {EventoCrearComponent} from "./modulos/Usuario/Evento/evento-crear/evento-crear.component";
import {EventoAnadirHijoComponent} from "./modulos/Usuario/Evento/evento-anadir-hijo/evento-anadir-hijo.component";
import {EventoVerHijosComponent} from "./modulos/Otros/evento-ver-hijos/evento-ver-hijos.component";
import {FacturacionMainComponent} from "./modulos/Cajero/facturacion-main/facturacion-main.component";
import {FacturaClienteComponent} from "./modulos/Cliente/factura-cliente/factura-cliente.component";
import {ClienteVentanComponent} from "./modulos/Cliente/cliente-ventan/cliente-ventan.component";
import {CajerofacturasComponent} from "./modulos/Cajero/cajerofacturas/cajerofacturas.component";
import {AnadirItemComponent} from "./modulos/Cajero/anadir-item/anadir-item.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginUsuarioComponent
  },
  {
    path: 'registrarse',
    component: RegistrarUsuarioComponent
  },
  {
    path:"Administrador",
    component: VisualizarUsuariosComponent,
    canActivate: [
      AdministradorLoginServiceService
    ],
    children:[
      {
        path: 'ActualizarUsuario/:idUsuario',
        component: ActualizarRolesUsuarioComponent
      }
    ]
  },
  {
    path:'Usuario',
    component: UsuarioMainComponent,
    canActivate: [
      UsuarioLoginServiceService
    ],
    children:[
      {
        path: 'libroVisualizar',
        component: LibroVisualizarComponent
      },
      {
        path: 'libroCrear',
        component: LibroCrearComponent
      },
      {
        path: 'libroActualizar/:id',
        component: LibroActualizarComponent
      },
      {
        path: 'autorVisualizar',
        component: AutorVisualizarComponent
      },
      {
        path: 'autorCrear',
        component: AutorCrearComponent
      },
      {
        path: 'autorActualizar/:id',
        component: AutorActualizarComponent
      },
      {
        path: 'eventoVisualizar',
        component: EventoVisualizarComponent,
        children:[
          {
            path: 'hijosEvento/:id',
            component: EventoVerHijosComponent
          }
        ]
      },
      {
        path: 'anadireventoHijos/:id',
        component: EventoAnadirHijoComponent
      },
      {
        path: 'eventoCrear',
        component: EventoCrearComponent
      }
    ]
  },
  {
    path: 'Cajero',
    component: CajeroMainComponent,
    canActivate: [
      CajeroLoginServiceeService
    ],
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'visualizarfacturas'
      },
      {
        path: 'visualizarfacturas',
        component: CajerofacturasComponent
      },
      {
        path: 'facturacion/:id',
        component: FacturacionMainComponent
      },
      {
        path: 'anadirItem/:id',
        component: AnadirItemComponent
      }
    ]
  },
  {
    path: 'Cliente',
    component: ClienteVentanComponent,
    canActivate: [
      ClienteLoginServiceService
    ],
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'visualizar'
      },
      {
        path: 'facturacion/:id',
        component: FacturaClienteComponent
      },
      {
        path: 'visualizar',
        component: ClienteMainComponent
      }
    ]
  },
  {
    path: 'Eventos',
    component: EventoVisualizarComponent,
    children:[
      {
        path: 'hijosEvento/:id',
        component: EventoVerHijosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
