import {Component, ViewChild} from '@angular/core';
import {AlertController, Events, Platform} from 'ionic-angular';
import {App} from 'ionic-angular/components/app/app'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {AutenticacaoProvider} from "../providers/autenticacao/autenticacao";
import {TabsPage} from "../pages/modulo-cadastrador/tabs/tabs";
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import {PerfilPage} from "../pages/perfil/perfil";
import {MenuProvider} from "../providers/menu/menu";
import {InicioPage} from "../pages/modulo-revendedor/inicio/inicio";
import {RequisitarProdutosPage} from "../pages/modulo-revendedor/requisitar-produtos/requisitar-produtos";
import {MeusProdutosPage} from "../pages/modulo-revendedor/meus-produtos/meus-produtos";
import {PerfilRevendedorPage} from "../pages/modulo-revendedor/perfil-revendedor/perfil-revendedor";
import {ProdutoresPage} from "../pages/modulo-cadastrador/produtores/produtores";
import {ProdutosPage} from "../pages/modulo-cadastrador/produtos/produtos";
import {RevendedoresPage} from "../pages/modulo-cadastrador/revendedores/revendedores";
import {MercadosPage} from "../pages/modulo-cadastrador/mercados/mercados";
import {Network} from "@ionic-native/network";
import {NetworkProvider} from "../providers/network/network";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  user: any;

  @ViewChild('content') ionNav;


  public menuPaginasProdutor : any[];
  public menuPaginasCadastrador : any[];
  public menuPaginasRevendedor : any[];

   rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public autenticacaoProvider: AutenticacaoProvider,
              public alertController: AlertController,
              public menuProvider: MenuProvider,
              public network: Network,
              public networkProvider: NetworkProvider,
              public eventsProvider: Events,
              app: App,
              ){
    platform.ready().then(() => {

      this.networkProvider.initializeNetworkEvents();

      //  Offline event
      this.eventsProvider.subscribe('network:offiline', () => {
        alert('offline');
      });

      //  Online event
      this.eventsProvider.subscribe('network:online', ()=> {
        alert('online');
      });

      platform.registerBackButtonAction(() => {
        app.navPop();
      });


    });

    this.menuPaginasProdutor = [
      {icon: 'home', pageName: 'Produtos Requisitados', page: ProdutosrequsitadosPage},
      {icon: 'send', pageName: 'Disponibilizar Produtos', page: DisponibilizarProdutosPage},
      {icon: 'leaf', pageName: 'Meus Produtos', page: ProdutosDisponibilizadosPage},
      {icon: 'person', pageName: 'Meu Perfil', page: PerfilPage}
    ];

    this.menuPaginasCadastrador = [
      {icon: 'leaf', pageName: 'Produtos', page: ProdutosPage},
      {icon: 'ios-people', pageName: 'Produtores', page: ProdutoresPage},
      {icon: 'person', pageName: 'Revendedores', page: RevendedoresPage},
      {icon: 'ios-basket', pageName: 'Mercados', page: MercadosPage},
      {icon: 'person', pageName: 'Meu Perfil', page: PerfilPage}
    ];

    this.menuPaginasRevendedor = [
      {icon: 'home', pageName: 'Inicio', page: InicioPage},
      {icon: 'send', pageName: 'Requisitar Produtos', page: RequisitarProdutosPage},
      {icon: 'leaf', pageName: 'Meus Produtos', page: MeusProdutosPage},
      {icon: 'person', pageName: 'Meu Perfil', page: PerfilRevendedorPage}
    ];


      this.getUserData();
      this.getPage();


  }


   getPage(){
    let token = localStorage.getItem('token');

    if(token) {
        this.autenticacaoProvider.getUserFromToken(token).subscribe(
            (response) => {

              console.log(response);

                this.user = response.user;

                if (response.tipo_user == 'Cadastrador')
                    this.rootPage = TabsPage;
                if (response.tipo_user == 'Produtor')
                    this.rootPage = ProdutosrequsitadosPage;
                if (response.tipo_user == 'Revendedor')
                    this.rootPage = InicioPage;
            },
            (erros) => {
              localStorage.removeItem('token');
                this.rootPage = LoginPage;
            }
        );
    }else {
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
                    this.menuProvider.setTipoUser(response['tipo_user']);
                    this.menuProvider.setShowMenu(true);
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
                    this.menuProvider.setShowMenu(false);
                    this.menuProvider.setTipoUser('');
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
