import {Component, ViewChild} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import {PerfilPrivadoPage} from "../pages/perfil-privado/perfil-privado";
import {Storage} from "@ionic/storage";
import {StartPage} from "../pages/start/start";
import {PaginaPrincipalPage} from "../pages/pagina-principal/pagina-principal";
import {ProdutosListPage} from "../pages/produtos-list/produtos-list";
import {RevendedoresListPage} from "../pages/revendedores-list/revendedores-list";
import {ProdutoresListPage} from "../pages/produtores-list/produtores-list";
import {EscolherProdutoPage} from "../pages/escolher-produto/escolher-produto";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  protected rootPage: any;
  protected user: {};
  public menu : any[];

  @ViewChild('content') ionNav;


  constructor(
              public platform: Platform,
              app: App,
              public storageController: Storage,
              public alertController: AlertController
              ){

    platform.ready().then(() => {

      platform.registerBackButtonAction(() => {
        app.navPop();
      });

    });

    // this.redirectUser();

    this.rootPage = EscolherProdutoPage;

    this.menu = [
      {icon: 'ios-contacts', pageName: 'Produtores', page: ProdutoresListPage},
      {icon: 'ios-people', pageName: 'Revendedores', page: RevendedoresListPage},
      {icon: 'ios-leaf', pageName: 'Produtos', page: ProdutosListPage},
      {icon: 'ios-person', pageName: 'Meu Perfil', page: PerfilPrivadoPage}
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
          this.rootPage = StartPage;
        }
      }
    ).catch((error) => {
      console.log(error);
      this.rootPage = StartPage;
    });
  }



    showPageProdutor(page){
      this.ionNav.push(page);
    }


  logout(){
    this.alertController.create(
      {
        title: "Sair da Aplicação",
        message: "Tem a certeza que quer sair da aplicação?",
        buttons: [
          {
            text: 'SIM',
            handler: ()=>{
              console.log("Saindo");
              this.storageController.clear();
              this.ionNav.setRoot(StartPage);
            }
          },
          {
            text: "NãO",
          }
        ]
      }
    ).present();
  }




}
