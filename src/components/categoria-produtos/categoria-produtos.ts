import { Component } from '@angular/core';

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

  categorias: any[];

  constructor() {
    this.categorias = [1,2,4,24,52];
  }

}
