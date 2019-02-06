import {Component, ViewChild} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import {PerfilPrivadoPage} from "../pages/perfil-privado/perfil-privado";
import {PublicacoesPage} from "../pages/publicacoes/publicacoes";

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
      {icon: 'person', pageName: 'Meu Perfil', page: PerfilPrivadoPage}
    ];

     this.getPage();


  }


   getPage() {
      this.rootPage = PublicacoesPage;
   }



    showPageProdutor(page){
      this.ionNav.setRoot(page);
    }






}
