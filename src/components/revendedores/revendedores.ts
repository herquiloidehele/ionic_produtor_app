import { Component, Input} from '@angular/core';


@Component({
  selector: 'revendedores',
  templateUrl: 'revendedores.html'
})
export class RevendedoresComponent {

  @Input('revendedor') revendedor: any;

  constructor() {

  }



    getLetrasIniciais(nome){
        let nomes = nome.split(' ');
        return nomes[0].charAt(0) + nomes[nomes.length-1].charAt(0);
    }



}
