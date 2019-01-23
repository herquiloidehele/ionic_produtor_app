import {Component, ViewChild} from '@angular/core';
import {AlertController, Events, Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import {LoginPage} from "../pages/login/login";
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import {PerfilPage} from "../pages/perfil/perfil";
import {StartPage} from "../pages/start/start";

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
      this.rootPage = StartPage;
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
