import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ProcurasProvider} from "../../../providers/procuras/procuras";


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

    produtosRequisitados: any[] = [];

  constructor(public navControl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public procuraProvider: ProcurasProvider
  ) {
    this.getProdutosRequisitados();
  }

    ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }

    ionViewDidLoad(){

    }


    getProdutosRequisitados(){
      this.procuraProvider.getAll().subscribe(
        (response) => {
          console.log(response);
          this.produtosRequisitados = response;
        },
        (erros) => {
          console.log(erros);
        }
      );
    }



}
