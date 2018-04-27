import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {LoginPage} from "../../login/login";
import {ProdutosDisponibilizadosPage} from "../produtos-disponibilizados/produtos-disponibilizados";
import {DisponibilizarProdutosPage} from "../disponibilizar-produtos/disponibilizar-produtos";
import {AutenticacaoProvider} from "../../../providers/autenticacao/autenticacao";
import {ProdutosrequsitadosPage} from "../produtosrequsitados/produtosrequsitados";

/**
 * Generated class for the RootProdutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-root-produtor',
  templateUrl: 'root-produtor.html',
})
export class RootProdutorPage {


  user: any;
  tipoUser: any;

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
