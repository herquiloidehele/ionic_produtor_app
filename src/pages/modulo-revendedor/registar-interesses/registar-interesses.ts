import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {UnidadeMedidaProvider} from "../../../providers/unidade-medida/unidade-medida";
import {InteresseProvider} from "../../../providers/interesse/interesse";

/**
 * Generated class for the RegistarInteressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registar-interesses',
  templateUrl: 'registar-interesses.html',
})
export class RegistarInteressesPage {

  produtos: any[];
  produto: any;
  unidadeMedida: any;
  quantidade: any;
  unidadeMedidas: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController,
    public unidadeMedidaProvider: UnidadeMedidaProvider,
    public interesseProvider: InteresseProvider)
  {
    this.produtos = this.navParams.get('produtos');
    console.log(this.produtos);
    this.getAllUnidadeMedida();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistarMeusProdutosPage');
  }

  ionViewWillEnter(){
    this.viewController.showBackButton(false);
  }


  getAllUnidadeMedida(){
    this.unidadeMedidaProvider.getAll().subscribe(
      (response) => {
        this.unidadeMedidas = response.unidades_medidas;
      },
      (erros) => {
        console.log(erros);
      }
    );
  }


  salvarProduto(){

    let interesse = {
      revendedores_id: JSON.parse(localStorage.getItem('user')).id,
      produtos_id: this.produto,
      unidades_medidas_id: this.unidadeMedida,
      quantidade_media: this.quantidade,
    };

    console.log(interesse);

    this.interesseProvider.salvarInteresse(interesse).subscribe(
      (response) => {
        console.log(response);
        this.navCtrl.pop();
      },
      (erros) => {
        console.log(erros);
      }
    );

  }


  // habilitarSave(): boolean{
  //   return this.produto != 'undefined' && this.unidadeMedida != 'undefined' && this.quantidade != 'undefined';
  // }

  voltar(){
    this.navCtrl.pop();
  }


}
