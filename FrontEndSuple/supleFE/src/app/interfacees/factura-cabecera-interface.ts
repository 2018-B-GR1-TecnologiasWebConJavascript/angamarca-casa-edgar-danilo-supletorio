import {EventoInterface} from "./evento-interface";
import {UsuarioInterface} from "./usuario-interface";

export interface FacturaCabeceraInterface {
  id: number | string;
  nombre: string;
  cedulaRuc: string;
  telefono: string;
  direccion: string;
  correoElectronico: string;
  fecha:string;
  total:number;
  tipoPago:number;
  estado: string;
  idEvento: number | string | EventoInterface
  idUsuario: number | string | UsuarioInterface;
}
