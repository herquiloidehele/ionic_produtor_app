import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PaginaPrincipalPage} from "../pagina-principal/pagina-principal";
import {UserProvider} from "../../providers/user/user";
import {Storage} from "@ionic/storage";
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {ProdutosProvider} from "../../providers/produtos/produtos";

@IonicPage()
@Component({
  selector: 'page-escolher-produto',
  templateUrl: 'escolher-produto.html',
})
export class EscolherProdutoPage {

  protected produtos = [];
  protected produtosCopy = [];
  protected chekboxIds = [];
  protected user = {};
  protected loader = true;
  protected showSearch = false;


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public userProvider: UserProvider,
      public produtosProvider: ProdutosProvider,
      public loadingController: LoadingController,
      public alertController: AlertController,
      public storageController: Storage,
      public urlApi: UrlapiProvider
  ) {
  }

  ionViewDidLoad(){
    this.getProdutos();
    this.user = this.navParams.get('user');
  }

  protected getProdutos(){
    this.produtosProvider.getAll().subscribe(
      (response) => {
        this.produtos = response['produtos'];
        this.produtosCopy = response['produtos'];
        console.log(this.produtos);
      },
      (error) => {console.log(error)},
      () => {
        this.loader = false;
      }
    );
  }

  protected getIMG(categoria){
    switch (categoria) {
      case 'Frutas' : return '../../assets/icon/categorias/fruits3.svg';
      case 'Legumes' : return '../../assets/icon/categorias/legumes2.svg';
      case 'Verduras' : return '../../assets/icon/categorias/vegetables3.svg';
      case 'Grãos e Cereais' : return '../../assets/icon/categorias/cereals2.svg';
      default: return '';
    }

  }

  protected check(idCheck){
    if(this.isChecked(idCheck))
      this.chekboxIds.splice(this.chekboxIds.indexOf(idCheck),1);
    else
      this.chekboxIds.push(idCheck);
    console.log(this.chekboxIds);
  }

  protected isChecked(idCheck){
    return this.chekboxIds.indexOf(idCheck) != - 1;
  }

  protected onClickProximo(){

    this.user['interesses'] = this.chekboxIds.map(function (chekbox) {
      return chekbox.substr(3);
    });

    console.log(this.user);
    this.createAccount(this.user);
  }

  protected createAccount(user){

    const loading = this.loadingController.create({content: "Finalizando"});
    loading.present();

    this.userProvider.createAccount(user).subscribe(
      (response) => {
        console.log({server: response});
        this.saveUserDataOnDevice(response['user'], loading);
      },
      (error) => {
        console.log(error);
        loading.dismiss();
        this.showErrorAlert();
      }
    );
  }

  protected saveUserDataOnDevice(user, loading){
    this.storageController.set('user', user).then(
      (response) => {
        loading.dismiss();
        this.navCtrl.push(PaginaPrincipalPage, {user: user, tabIndex: 0});
      }
    ).catch((error)=>{
      console.log(error);
      loading.dismiss();
      this.showErrorAlert();
    });
  }

  private async showErrorAlert(){
    const alert = this.alertController.create({
      'title': 'Erro',
      'message': 'Verifique a sua conexao a internet, e tente novamente',
      buttons: ['ok']
    });

    await alert.present();

  }


  protected onInput(event){
    this.produtos = this.produtosCopy;

    this.produtos = this.produtos.filter((mercado, indice) => {
      return (mercado.designacao.toUpperCase().indexOf(event.target.value.trim().toUpperCase()) > -1);
    });
  }

  protected onBlur(){
    this.changeShowSearch();
  }

  protected onCancel(){
    console.log('cancelado');
    this.changeShowSearch();
  }

  protected changeShowSearch(){
    this.showSearch = !this.showSearch;
  }





}
