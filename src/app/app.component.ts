import {Component, ViewChild} from '@angular/core';
import {AlertController, Events, Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import {LoginPage} from "../pages/login/login";
import {AutenticacaoProvider} from "../providers/autenticacao/autenticacao";
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import {PerfilPage} from "../pages/perfil/perfil";
import {Network} from "@ionic-native/network";
import {UrlapiProvider} from "../providers/urlapi/urlapi";
import {UserInfoPage} from "../pages/user-info/user-info";
import {LocalizacaoPage} from "../pages/localizacao/localizacao";
import {EscolherProdutoPage} from "../pages/escolher-produto/escolher-produto";
import {StartPage} from "../pages/start/start";
import {ShowEscolherProdutosPage} from "../pages/show-escolher-produtos/show-escolher-produtos";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  user: any;

  @ViewChild('content') ionNav;


  public menu : any[];


  rootPage: any;

  constructor(public platform: Platform,
              public alertController: AlertController,
              app: App,
              ){

    platform.ready().then(() => {

      platform.registerBackButtonAction(() => {
        app.navPop();
      });


    });

    this.menu = [
      {icon: 'home', pageName: 'Produtos Requisitados', page: ProdutosrequsitadosPage},
      {icon: 'send', pageName: 'Disponibilizar Produtos', page: DisponibilizarProdutosPage},
      {icon: 'leaf', pageName: 'Meus Produtos', page: ProdutosDisponibilizadosPage},
      {icon: 'person', pageName: 'Meu Perfil', page: PerfilPage}
    ];


      this.getUserData();
      this.getPage();


  }


   getPage() {
      this.rootPage = ShowEscolherProdutosPage;
   }



    showPageProdutor(page){
      this.ionNav.setRoot(page);
    }

    getUserData(){
        let token = localStorage.getItem('token');


    }



    private sair(token){
      this.ionNav.setRoot(LoginPage);
    }







}
