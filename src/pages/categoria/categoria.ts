import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  protected categoria;
  protected produtos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoria = this.navParams.get('categoria');
    this.produtos = this.categoria.produtos;
  }

  getElements(event){
    this.produtos = this.categoria.produtos;

    let val = event.target.value;

    if(val && val.trim() != ''){
      this.produtos = this.produtos.filter((produto) => {
        return (produto.designacao.toLowerCase().indexOf(val.trim().toLowerCase()) > -1);
      })
    }
  }
}
