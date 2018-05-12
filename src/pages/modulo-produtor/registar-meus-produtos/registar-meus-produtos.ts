import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {UnidadeMedidaProvider} from "../../../providers/unidade-medida/unidade-medida";
import {ProduzProvider} from "../../../providers/produz/produz";

/**
 * Generated class for the RegistarMeusProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registar-meus-produtos',
  templateUrl: 'registar-meus-produtos.html',
})
export class RegistarMeusProdutosPage {


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
    public produzProvider: ProduzProvider)
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

    let produz = {
      produtores_id: JSON.parse(localStorage.getItem('user')).id,
      produtos_id: this.produto,
      unidades_medidas_id: this.unidadeMedida,
      quantidade_media: this.quantidade,
    };

    console.log(produz);

    this.produzProvider.salvarProduz(produz).subscribe(
      (response) => {
        console.log(response);
        this.navCtrl.pop();
      },
      (erros) => {
        console.log(erros);
      }
    );

  }


  habilitarSave(): boolean{
    return this.produto != 'undefined' && this.unidadeMedida != 'undefined' && this.quantidade != 'undefined';
  }


}
