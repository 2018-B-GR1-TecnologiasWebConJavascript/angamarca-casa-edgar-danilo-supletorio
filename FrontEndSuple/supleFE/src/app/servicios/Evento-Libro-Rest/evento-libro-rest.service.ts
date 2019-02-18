import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {EventoPorLibroInterface} from "../../interfacees/evento-por-libro-interface";

@Injectable({
  providedIn: 'root'
})
export class EventoLibroRestService {

  private nombreModelo: string = "/EventoPorLibro";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<EventoPorLibroInterface[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <EventoPorLibroInterface[]> r));
  }

  delete(id: number | string): Observable<EventoPorLibroInterface> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <EventoPorLibroInterface> r));
  }

  create (objeto:EventoPorLibroInterface): Observable<EventoPorLibroInterface> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, objeto)
      .pipe(map(r => <EventoPorLibroInterface> r));
  }

  findById(id: number | string): Observable<EventoPorLibroInterface> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <EventoPorLibroInterface> r));
  }
}
