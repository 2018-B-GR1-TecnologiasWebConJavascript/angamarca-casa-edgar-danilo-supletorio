import {EventoInterface} from "./evento-interface";
import {LibroInterface} from "./libro-interface";

export interface EventoPorLibroInterface {
  id: number | string;
  precioBase: number;
  idEvento: number | string | EventoInterface;
  idLibro: number | string | LibroInterface;
}
