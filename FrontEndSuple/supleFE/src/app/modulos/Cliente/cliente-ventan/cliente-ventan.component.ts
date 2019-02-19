import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cliente-ventan',
  templateUrl: './cliente-ventan.component.html',
  styleUrls: ['./cliente-ventan.component.scss']
})
export class ClienteVentanComponent implements OnInit {

  constructor(
    private readonly _route:Router
  ) { }

  ngOnInit() {
  }

  salir(){
    localStorage.setItem('SupleUser', null);
    this._route.navigate((['/login']));
  }
}
