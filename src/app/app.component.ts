import {Component, ViewChild} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import {PerfilPrivadoPage} from "../pages/perfil-privado/perfil-privado";
import {Storage} from "@ionic/storage";
import {StartPage} from "../pages/start/start";
import {PaginaPrincipalPage} from "../pages/pagina-principal/pagina-principal";
import {ProcurasPage} from "../pages/procuras/procuras";

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

    this.redirectUser();

    // this.rootPage = ProdutosDoMercadosPage;

    this.menu = [
      {icon: 'home', pageName: 'Produtos Requisitados', page: ProcurasPage},
      {icon: 'send', pageName: 'Revendedores', page: DisponibilizarProdutosPage},
      {icon: 'leaf', pageName: 'Meus Produtos', page: ProdutosDisponibilizadosPage},
      {icon: 'help', pageName: 'Ajuda', page: ProdutosDisponibilizadosPage},
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
