import {Component, Input} from '@angular/core';

/**
 * Generated class for the CategoriaProdutosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'categoria-produtos',
  templateUrl: 'categoria-produtos.html'
})
export class CategoriaProdutosComponent {

  @Input('categoria') categoria: any[];

  constructor() {

  }

}
