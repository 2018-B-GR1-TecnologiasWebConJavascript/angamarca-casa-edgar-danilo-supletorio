import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {filter, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {EventoInterface} from "../../interfacees/evento-interface";
import {EventoPorLibroInterface} from "../../interfacees/evento-por-libro-interface";

@Injectable({
  providedIn: 'root'
})
export class EventoRestServiceService {

  private nombreModelo: string = "/Evento";

  constructor(
    private readonly _httpClient: HttpClient
  ) {

  }

  create(objeto:EventoInterface): Observable<EventoInterface> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <EventoInterface> r));
  }

  findById(id: number | string): Observable<EventoInterface> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <EventoInterface> r));
  }

  findAll(): Observable<EventoInterface[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <EventoInterface[]> r));
  }

  findhijosEvento(): Observable<EventoPorLibroInterface[]> {
    return  this._httpClient
      .get(environment.url + "/EventoPorLibro")
      .pipe(map(r => <EventoPorLibroInterface[]> r));
  }


}
