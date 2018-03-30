import { Component } from '@angular/core';

/**
 * Generated class for the ProdutosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'produtos',
  templateUrl: 'produtos.html'
})
export class ProdutosComponent {

  text: string;

  constructor() {
    console.log('Hello ProdutosComponent Component');
    this.text = 'Hello World';
  }

}
