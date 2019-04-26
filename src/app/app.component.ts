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
import {ProdutoresProvider} from "../providers/produtores/produtores";

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
              public alertController: AlertController,
              public produtorProvider: ProdutoresProvider
              ){

    platform.ready().then(() => {

      platform.registerBackButtonAction(() => {
        app.navPop();
      });

    });

    this.redirectUser();

    // this.rootPage = LocalizacaoPage;

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
          this.updateUserData(this.user['id']);
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
      this.ionNav.push(page, {showBackButton: true});
    }


    public updateUserData(id){
      this.produtorProvider.getProdutor(id).subscribe((response) => {
          console.log(response['produtor']);
        if(response['produtor'] && response['produtor'] && null || response['produtor'] != 'undefined' && response['produtor'] != undefined){
          console.log("dentro");
          this.storageController.set('user', response['produtor']);
        }
      },
        (error) => {
          console.log(error);
        })
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
