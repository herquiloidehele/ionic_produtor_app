import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AutenticacaoProvider} from "../../../providers/autenticacao/autenticacao";


/**
 * Generated class for the ProdutosrequsitadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtosrequsitados',
  templateUrl: 'produtosrequsitados.html',
})
export class ProdutosrequsitadosPage {

    user: any;
    tipoUser:any;

  constructor(public navControl: NavController,
              public navParams: NavParams,
              public autenticacaoService: AutenticacaoProvider,
              public alertController: AlertController,
              public viewCtrl: ViewController
  ) {
  }

    ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }


}
