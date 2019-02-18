import { Component, OnInit } from '@angular/core';
import {EventoInterface} from "../../../../interfacees/evento-interface";
import {LibroInterface} from "../../../../interfacees/libro-interface";
import {LibroRestServiceService} from "../../../../servicios/Autor-Rest/libro-rest-service.service";
import {AutorInterface} from "../../../../interfacees/autor-interface";
import {ActivatedRoute} from "@angular/router";
import {EventoRestServiceService} from "../../../../servicios/Evento-Rest/evento-rest-service.service";
import {UsuarioInterface} from "../../../../interfacees/usuario-interface";
import {EventoPorLibroInterface} from "../../../../interfacees/evento-por-libro-interface";
import {EventoLibroRestService} from "../../../../servicios/Evento-Libro-Rest/evento-libro-rest.service";

@Component({
  selector: 'app-evento-anadir-hijo',
  templateUrl: './evento-anadir-hijo.component.html',
  styleUrls: ['./evento-anadir-hijo.component.scss']
})
export class EventoAnadirHijoComponent implements OnInit {

  evento:EventoInterface=<EventoInterface> {};
  libros: LibroInterface[] = [];
  librosUsuario: LibroInterface[]= [];
  eventosAuxLibros:EventoPorLibroInterface[] = [];
  eventoLibro: EventoPorLibroInterface=<EventoPorLibroInterface>{};
  idLibroseleccionado:string ="";
  constructor(
    private readonly _libroRest:LibroRestServiceService,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _objetoRest: EventoRestServiceService,
    private readonly _eventoLibroRest: EventoLibroRestService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activateRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const librosEvento$ = this._objetoRest.findhijosEvento();
          librosEvento$.subscribe(
            (m:EventoPorLibroInterface[])=>{
              const obj = m.filter(
                a => {
                  const b = <EventoInterface> a.idEvento;
                  try{
                    if(b.id == parametros.id)
                      return a;
                  }catch (e) { }
                }
              );
              this.eventosAuxLibros = obj;
              this.libros = obj.map( m => <LibroInterface> m.idLibro);
            }
          );
          const evento$ = this._objetoRest.findById(parametros.id);
          evento$.subscribe(
              (obj:EventoInterface) => {
                this.evento = obj;
                this.eventoLibro.idEvento = obj.id;
              }
            );
        }
      );
    const  libros$ = this._libroRest.findAll();
    libros$.subscribe(
      (libro:LibroInterface[])=> {
       const lib= libro.filter(
          l=>{
            const autor = <AutorInterface>l.idAutor;
            if(autor.idUsuario){
              const usuario = <string> autor.idUsuario;
              if(usuario == localStorage.getItem("SupleUser")){
                return l;
              }
            }
          }
        );
        this.librosUsuario = lib;
      }
    );

  }
  seleccionarLibro(){
    if(this.idLibroseleccionado)
    if(!this.libros.find( m=> m.id == this.idLibroseleccionado)){
      this.eventoLibro.idLibro = this.idLibroseleccionado;
    }else{
      this.eventoLibro.idLibro = null;
      alert("El evento ya esta registrado");
      this.idLibroseleccionado = "";
    }
  }

  agregarHijoEvento(){
    if(this.eventoLibro.idLibro && this.eventoLibro.precioBase){
      if(this.eventoLibro.precioBase>0){
        const eventol$ = this._eventoLibroRest.create(this.eventoLibro);
        eventol$.subscribe(
          e=> this.libros.push(<LibroInterface>e.idLibro)
        );
      }else
        alert("El precio base debe ser superior a 0");
    }else
      alert("Seleccione el libro y el precio base (datos obligatorios)");
  }

  eliminar(id:number|string){
    if(this.librosUsuario.findIndex(m=> m.id === id) != -1){
      const indice = this.eventosAuxLibros.filter(
        m=> {
          const l= <LibroInterface>m.idLibro;
          if(l.id == id)
            return m;
        }
      );
      const eliminar$ = this._eventoLibroRest.delete(indice[0].id);
      eliminar$.subscribe(
        el=> {
          const elim= <LibroInterface> el.idLibro;
          this.libros.splice(this.libros.findIndex( l=> l.id === elim.id),1)
        }
      );
    }else{
      alert("No puede eliminar el hijo, porque no perteneece a usted");
    }
  }


}
