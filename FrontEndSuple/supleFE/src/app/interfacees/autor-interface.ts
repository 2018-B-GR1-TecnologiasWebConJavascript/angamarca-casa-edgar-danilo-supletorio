import {UsuarioInterface} from "./usuario-interface";

export interface AutorInterface {
  id: number | string;
  nombres: string;
  apellidos:string;
  fechaNacimiento:string;
  numeroLibros:number;
  ecuatoriano:boolean;
  idUsuario: string | number | UsuarioInterface;
}
