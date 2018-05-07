import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

/*
  Generated class for the GerarCoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GerarCoresProvider {


  private cores = ['#E874D8', '#00FF01', '#0013FE', '#00A3FF', '#01FFE5', '#FF6201', '#3CB371', '#1E90FF', '#FF1493', '#ad4330', '#590293', '#ED5A79'];


  constructor() {

  }

  /**
   * getra um  numero aleatorio e escolhe uma core no array
   * @returns {String}
   */
  getColor(): Observable<any>{
    let minimo = Math.ceil(0);
    let maximo = Math.floor(this.cores.length);

    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    return of(this.cores[aleatorio]);
  }




}
