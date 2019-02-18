import {Component, Input, OnInit} from '@angular/core';
import {LibroInterface} from "../../interfacees/libro-interface";

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {

  libro = <LibroInterface>{}

  @Input()
  libroAux: LibroInterface

  constructor() { }

  ngOnInit() {
    this.libro = JSON.parse(JSON.stringify(this.libroAux));
  }

}
