import {FacturaCabeceraInterface} from "./factura-cabecera-interface";
import {EventoPorLibroInterface} from "./evento-por-libro-interface";

export interface FacturaDetalleInterface {
  id: number | string;
  catidad: number;
  precio: number;
  total: number;
  idFacturaCabecera: number | string | FacturaCabeceraInterface;
  idEventoPorLibro: number | string | EventoPorLibroInterface;
}
