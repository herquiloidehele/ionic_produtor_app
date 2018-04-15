import {Component, Input} from '@angular/core';

/**
 * Generated class for the MercadosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mercados',
  templateUrl: 'mercados.html'
})
export class MercadosComponent {


  @Input('mercado') mercado: any;

  constructor() {
  }

}
