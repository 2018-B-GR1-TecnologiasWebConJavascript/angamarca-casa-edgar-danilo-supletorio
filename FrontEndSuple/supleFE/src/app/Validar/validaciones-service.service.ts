import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesServiceService {


  constructor() { }

  soloLetras(texto:string):boolean{
    const regexSoloLetras = /^[a-zA-Z\s]+$/;
    if(regexSoloLetras.test(texto))
      return true;
    else
      return false;
  }
  soleNumeros(texto:string):boolean{
    const regexSoloNumeros = /^[0-9]+$/;
    if(regexSoloNumeros.test(texto))
      return true;
    else
      return false;
  }
  correoElectronico(texto:string):boolean{
    const regexCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexCorreo.test(texto))
      return true;
    else
      return false;
  }

  letraMinuscula(texto:string){
    const regez= /[a-z]/
    if(regez.test(texto))
      return true;
    else
      return false;
  }

  letraMayuscula(texto:string){
    const regez= /[A-Z]/
    if(regez.test(texto))
      return true;
    else
      return false;
  }

  numeros(texto:string){
    const regez= /[0-9]/
    if(regez.test(texto))
      return true;
    else
      return false;
  }
  caracteresEspeciales(texto:string){
    const regez= /\W/
    if(regez.test(texto))
      return true;
    else
      return false;
  }

  validarFechaMayor(texto:string):boolean{
    var dato = new Date(texto);
    var ahora = new Date();
    if(ahora<dato)
      return true
    else
      return false;
  }

  validarFechaMenor(texto:string):boolean{
    var dato = new Date(texto);
    var ahora = new Date();
    if(ahora>dato)
      return true
    else
      return false;
  }
}
