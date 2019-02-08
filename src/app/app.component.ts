import {Component, ViewChild} from '@angular/core';
import {Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import {PerfilPrivadoPage} from "../pages/perfil-privado/perfil-privado";
import {Storage} from "@ionic/storage";
import {StartPage} from "../pages/start/start";
import {PaginaPrincipalPage} from "../pages/pagina-principal/pagina-principal";
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
              app: App,
              public storageController: Storage
              ){

    platform.ready().then(() => {

      platform.registerBackButtonAction(() => {
        app.navPop();
      });


    });

    // this.redirectUser();

    this.rootPage = RegistarOpertasPage;

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
          this.rootPage = PaginaPrincipalPage;
        }else{
          this.rootPage = PaginaPrincipalPage;
        }
      }
    ).catch((error) => {
      console.log(error);
      this.rootPage = StartPage;
    });
  }



    showPageProdutor(page){
      this.ionNav.setRoot(page);
    }






}
