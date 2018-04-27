import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistarRevendedoresPage} from "../cadastros/registar-revendedores/registar-revendedores";
import {RevendedorProvider} from "../../../providers/revendedor/revendedor";

/**
 * Generated class for the RevendedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revendedores',
  templateUrl: 'revendedores.html',
  entryComponents: [RegistarRevendedoresPage]
})
export class RevendedoresPage {

  private revendedores: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private revendedorProvider: RevendedorProvider) {
    this.revendedores = [];
  }


  onClickAdicionarRevendedor(){
    this.navCtrl.push(RegistarRevendedoresPage);
  }

  ionViewDidLoad() {
    this.getAll();
  }

  public getAll(){
    this.revendedorProvider.getAll().subscribe(
        (dados) => {
          this.revendedores = dados['revendedores'];
        },

        (erros) => {
          console.log(erros);
        },
        () =>{
          console.log('Busca de revendedores completa');
        }
    );
  }

}
