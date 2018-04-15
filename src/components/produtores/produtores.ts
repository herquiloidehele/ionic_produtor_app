import {Component, Input} from '@angular/core';

/**
 * Generated class for the ProdutoresComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'produtores',
  templateUrl: 'produtores.html'
})
export class ProdutoresComponent {


    @Input('produtor') produtor: any;


  constructor() {

  }

    getLetrasIniciais(nome){
      let nomes = nome.split(' ');
      return nomes[0].charAt(0) + nomes[nomes.length-1].charAt(0);
    }




}
