import {Component, ViewChild} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {AutenticacaoProvider} from "../providers/autenticacao/autenticacao";
import {TabsPage} from "../pages/modulo-cadastrador/tabs/tabs";
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: typeof LoginPage;

  tipoUser: any;
  user: any;

  @ViewChild('content') ionNav;


  private menuPaginasProdutor : any[];


   rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public autenticacaoProvider: AutenticacaoProvider,
              public alertController: AlertController,
              app: App
              ){
    platform.ready().then(() => {
      // statusBar.styleDefault();
      // splashScreen.hide();

      platform.registerBackButtonAction(() => {
        app.navPop();
      });

    });

    this.menuPaginasProdutor = [
      {icon: 'home', pageName: 'Produtos Requisitados', page: ProdutosrequsitadosPage},
      {icon: 'home', pageName: 'Disponibilizar Produtos', page: DisponibilizarProdutosPage},
      {icon: 'home', pageName: 'Meus Produtos', page: ProdutosDisponibilizadosPage}
    ];


      this.getUserData();
      this.getPage();
  }


  // public static setRootPage(pagina){
  //   this.rootPage = pagina;
  // }


   getPage(){
    let token = localStorage.getItem('token');

    if(token) {
        this.autenticacaoProvider.getUserFromToken(token).subscribe(
            (response) => {

              console.log(response);
                this.tipoUser = response.tipo_user;
                this.user = response.user;

                if (response.tipo_user == 'Cadastrador')
                    this.rootPage = TabsPage;
                if (response.tipo_user == 'Produtor')
                    this.rootPage = ProdutosrequsitadosPage;
                if (response.tipo_user == 'Revendedor')
                    this.rootPage = TabsPage;
            },
            (erros) => {
              localStorage.removeItem('token');
                this.rootPage = LoginPage;
            }
        );
    }else{
        console.log('Nao existe Token Ainda');
        this.rootPage = LoginPage;
    }


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
                    this.tipoUser = response['tipo_user'];

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
        this.autenticacaoProvider.logout(token).subscribe(
            (resultado) => {
                if (resultado['logout'] == true) {
                    this.ionNav.setRoot(LoginPage);
                    localStorage.removeItem('token');
                }
                else
                    alert('Ocorreu algum erro no logout');
            },
            (erros) => {
                console.log(erros);
            }
        );
    }







}
