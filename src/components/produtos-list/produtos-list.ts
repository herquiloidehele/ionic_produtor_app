import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";

/**
 * Generated class for the ProdutosListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'produtos-list',
  templateUrl: 'produtos-list.html'
})
export class ProdutosListComponent {

  @Input('produtos') produtos;
  @Output('eventEmiter') eventEmiter = new EventEmitter();
  constructor(public urlProvider: UrlapiProvider) {
  }

  selectProduto(produto){
    this.eventEmiter.emit(produto);
  }




}
