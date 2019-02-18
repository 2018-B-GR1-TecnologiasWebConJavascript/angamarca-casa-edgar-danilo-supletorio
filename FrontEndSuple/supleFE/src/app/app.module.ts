import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizarUsuariosComponent } from './modulos/Administrador/visualizar-usuarios/visualizar-usuarios.component';
import { ActualizarRolesUsuarioComponent } from './modulos/Administrador/actualizar-roles-usuario/actualizar-roles-usuario.component';
import {ValidacionesServiceService} from "./Validar/validaciones-service.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginUsuarioComponent } from './modulos/Otros/login-usuario/login-usuario.component';
import { RegistrarUsuarioComponent } from './modulos/Otros/registrar-usuario/registrar-usuario.component';
import { CajeroMainComponent } from './modulos/Cajero/cajero-main/cajero-main.component';
import { ClienteMainComponent } from './modulos/Cliente/cliente-main/cliente-main.component';
import { UsuarioMainComponent } from './modulos/Usuario/usuario-main/usuario-main.component';
import {AdministradorLoginServiceService} from "./guards/administrador-login-service.service";
import {ClienteLoginServiceService} from "./guards/cliente-login-service.service";
import {CajeroLoginServiceeService} from "./guards/cajero-login-servicee.service";
import {UsuarioLoginServiceService} from "./guards/usuario-login-service.service";
import { AutorVisualizarComponent } from './modulos/Usuario/Autor/autor-visualizar/autor-visualizar.component';
import { AutorCrearComponent } from './modulos/Usuario/Autor/autor-crear/autor-crear.component';
import { AutorActualizarComponent } from './modulos/Usuario/Autor/autor-actualizar/autor-actualizar.component';
import { LibroActualizarComponent } from './modulos/Usuario/Libro/libro-actualizar/libro-actualizar.component';
import { LibroCrearComponent } from './modulos/Usuario/Libro/libro-crear/libro-crear.component';
import { LibroVisualizarComponent } from './modulos/Usuario/Libro/libro-visualizar/libro-visualizar.component';
import { FormularioLibroComponent } from './componentes/formulario-libro/formulario-libro.component';
import { FormularioAutorComponent } from './componentes/formulario-autor/formulario-autor.component';
import { EventoVisualizarComponent } from './modulos/Otros/evento-visualizar/evento-visualizar.component';
import { EventoCrearComponent } from './modulos/Usuario/Evento/evento-crear/evento-crear.component';
import { EventoAnadirHijoComponent } from './modulos/Usuario/Evento/evento-anadir-hijo/evento-anadir-hijo.component';
import { EventoVerHijosComponent } from './modulos/Otros/evento-ver-hijos/evento-ver-hijos.component';
import {EventoRestServiceService} from "./servicios/Evento-Rest/evento-rest-service.service";
import { FormularioEventoComponent } from './componentes/formulario-evento/formulario-evento.component';
import { ListaLibrosComponent } from './componentes/lista-libros/lista-libros.component';
import { FormularioFacturaComponent } from './componentes/formulario-factura/formulario-factura.component';
import { FacturacionMainComponent } from './modulos/Cajero/facturacion-main/facturacion-main.component';
import { FacturaClienteComponent } from './modulos/Cliente/factura-cliente/factura-cliente.component';
import { ClienteVentanComponent } from './modulos/Cliente/cliente-ventan/cliente-ventan.component';
import { CajerofacturasComponent } from './modulos/Cajero/cajerofacturas/cajerofacturas.component';
import { AnadirItemComponent } from './modulos/Cajero/anadir-item/anadir-item.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarUsuariosComponent,
    ActualizarRolesUsuarioComponent,
    LoginUsuarioComponent,
    RegistrarUsuarioComponent,
    CajeroMainComponent,
    ClienteMainComponent,
    UsuarioMainComponent,
    AutorVisualizarComponent,
    AutorCrearComponent,
    AutorActualizarComponent,
    LibroActualizarComponent,
    LibroCrearComponent,
    LibroVisualizarComponent,
    FormularioLibroComponent,
    FormularioAutorComponent,
    EventoVisualizarComponent,
    EventoCrearComponent,
    EventoAnadirHijoComponent,
    EventoVerHijosComponent,
    FormularioEventoComponent,
    ListaLibrosComponent,
    FormularioFacturaComponent,
    FacturacionMainComponent,
    FacturaClienteComponent,
    ClienteVentanComponent,
    CajerofacturasComponent,
    AnadirItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ValidacionesServiceService,
    AdministradorLoginServiceService,
    ClienteLoginServiceService,
    CajeroLoginServiceeService,
    UsuarioLoginServiceService,
    EventoRestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
