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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  user: any;

  @ViewChild('content') ionNav;


  public menu : any[];


  rootPage: any;

  constructor(public platform: Platform,
              public autenticacaoProvider: AutenticacaoProvider,
              public alertController: AlertController,
              public urlprovider: UrlapiProvider,
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
      this.rootPage = LoginPage;
   }



    showPageProdutor(page){
      this.ionNav.setRoot(page);
    }

    getUserData(){
        let token = localStorage.getItem('token');

        if(token) {
            this.autenticacaoProvider.getUserFromToken(token).subscribe(
                (response) => {
                    this.user = response['user'];
                    console.log(this.user);
                },
                (erros) => {
                    console.log(erros);
                },
                () => {
                    console.log('getUserData completed');
                }
            );
        }else{
            console.log('Nao existe Token Ainda');
        }
    }



    public logout() {
        let token = localStorage.getItem('token');

        let prompt = this.alertController.create({
            title: 'Sair',
            message: 'Deseja Sair da Aplicacao?',
            buttons: [
                {
                    text: 'NÃO',
                    handler: (dados) => {
                        console.log('Canecelado');
                    }
                },
                {
                    text: 'SIM',
                    handler: (dados) => {
                        this.sair(token);
                    }
                }

            ],
        });

        prompt.present();


    }


    private sair(token){
      this.ionNav.setRoot(LoginPage);
    }







}
