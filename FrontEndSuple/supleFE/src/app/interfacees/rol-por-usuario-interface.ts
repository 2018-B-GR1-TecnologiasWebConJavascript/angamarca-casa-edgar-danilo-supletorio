import {RolInterface} from "./rol-interface";
import {UsuarioInterface} from "./usuario-interface";

export interface RolPorUsuarioInterface {
  id: number | string;
  idRol: RolInterface;
  idUsuario: UsuarioInterface;
}
