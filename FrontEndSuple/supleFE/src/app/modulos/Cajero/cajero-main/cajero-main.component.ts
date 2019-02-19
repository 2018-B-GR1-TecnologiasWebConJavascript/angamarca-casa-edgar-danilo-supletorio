import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cajero-main',
  templateUrl: './cajero-main.component.html',
  styleUrls: ['./cajero-main.component.scss']
})
export class CajeroMainComponent implements OnInit {

  constructor(
    private readonly _route: Router
  ) { }

  ngOnInit() {
  }

  salir(){
    localStorage.setItem('SupleUser', null);
    this._route.navigate((['/login']));
  }

}
