import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProdutoresProvider} from "../../../providers/produtores/produtores";

/**
 * Generated class for the ProdutoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtores',
  templateUrl: 'produtores.html',
})
export class ProdutoresPage {

  public produtores: any [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private produtoresProvider: ProdutoresProvider) {
  }

  ionViewDidLoad() {
    this.getAll();
  }


    public getAll(){
        this.produtoresProvider.getAll().subscribe(
            (dados) => {
                this.produtores = dados['produtores'];
                console.log(this.produtores);
            },
            (erros) => {
                console.log(erros);
            },
            () => {
                console.log('Busca de produtores terminada')
            }
        )
    }


}
