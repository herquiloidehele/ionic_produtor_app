import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ProdutosProvider} from "../../../providers/produtos/produtos";
import {RegistarInteressesPage} from "../registar-interesses/registar-interesses";
import {InteresseProvider} from "../../../providers/interesse/interesse";

/**
 * Generated class for the MeusProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-produtos',
  templateUrl: 'meus-produtos.html',
})
export class MeusProdutosPage {


  meusProdutos: any[];
  produtos: any[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController,
    public interesseProvider: InteresseProvider,
    public produtosProvider: ProdutosProvider,
    public navController: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosDisponibilizadosPage');
  }

  ionViewWillEnter(){
    // this.viewController.showBackButton(false);
    this.getAllProdutos();
  }


  getMeusProdutos(){
    let user = JSON.parse(localStorage.getItem('user'));
    this.interesseProvider.getMeusProdutos(user.id).subscribe(
      (response) => {
        console.log(response);
        this.meusProdutos = response['interesse'];
      },
      (erros) => {
        console.log(erros);
      }
    );
  }


  getAllProdutos(){
    this.produtosProvider.getAll().subscribe(
      (response) => {
        console.log(response['produtos']);
        this.produtos =  response['produtos'];
      },
      (erros) => {
        console.log(erros);
      },
      () => {
        this.getMeusProdutos();
      }

    );
  }


  adicionarProdutos(){
    this.navController.push(RegistarInteressesPage, {produtos: this.produtos});
  }


}
