import {AutorInterface} from "./autor-interface";

export interface LibroInterface {
  id: number | string;
  nombre: string;
  numeroPaginas: number;
  edicion: number;
  fechaPublicacion:string;
  nombreEditorial: string;
  idAutor: number | string | AutorInterface;
}
