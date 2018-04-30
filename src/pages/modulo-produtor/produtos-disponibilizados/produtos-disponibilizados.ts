import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ProduzProvider} from "../../../providers/produz/produz";
import {ProdutosProvider} from "../../../providers/produtos/produtos";
import {RegistarMeusProdutosPage} from "../../registar-meus-produtos/registar-meus-produtos";

/**
 * Generated class for the ProdutosDisponibilizadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos-disponibilizados',
  templateUrl: 'produtos-disponibilizados.html',
})
export class ProdutosDisponibilizadosPage {

  meusProdutos: any[];
  produtos: any[];


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewController: ViewController,
      public produzProvider: ProduzProvider,
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

  ionViewDidEnter(){
    // this.getMeusProdutos();
  }



  getMeusProdutos(){
    let user = JSON.parse(localStorage.getItem('user'));
    this.produzProvider.getMeusProdutos(user.id).subscribe(
      (response) => {
        console.log(response);
        this.meusProdutos = response.produz;
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
    this.navController.push(RegistarMeusProdutosPage, {produtos: this.produtos});
  }


}
