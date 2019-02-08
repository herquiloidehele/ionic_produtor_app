import {Component, ViewChild} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import {PerfilPrivadoPage} from "../pages/perfil-privado/perfil-privado";
import {Storage} from "@ionic/storage";
import {PaginaPrincipalPage} from "../pages/pagina-principal/pagina-principal";
import {StartPage} from "../pages/start/start";
import {RegistarOpertasPage} from "../pages/registar-opertas/registar-opertas";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  protected rootPage: any;
  protected user: {};
  public menu : any[];

  @ViewChild('content') ionNav;


  constructor(public platform: Platform,
              public alertController: AlertController,
              app: App,
              public storageController: Storage
              ){

    platform.ready().then(() => {

      platform.registerBackButtonAction(() => {
        app.navPop();
      });


    });

    this.redirectUser();

    this.menu = [
      {icon: 'home', pageName: 'Produtos Requisitados', page: ProdutosrequsitadosPage},
      {icon: 'send', pageName: 'Disponibilizar Produtos', page: DisponibilizarProdutosPage},
      {icon: 'leaf', pageName: 'Meus Produtos', page: ProdutosDisponibilizadosPage},
      {icon: 'person', pageName: 'Meu Perfil', page: PerfilPrivadoPage}
    ];

  }


  private redirectUser(){
    this.storageController.get('user').then(
      (response) => {
        console.log({storage: response});

        if(response){
          this.user = response;
          this.rootPage = RegistarOpertasPage;
        }else{
          this.rootPage = StartPage;
        }
      }
    ).catch((error) => {
      console.log(error);
      this.rootPage = StartPage;
    });
  }

  private async showErrorAlert(){
    const alert = this.alertController.create({
      'title': 'Erro',
      'message': 'Não foi possivel carregar os dados do utilizador, Feche e volte a abrir a aplicação',
      buttons: ['ok']
    });

    await alert.present();

  }



    showPageProdutor(page){
      this.ionNav.setRoot(page);
    }






}
