import {NgModule, ErrorHandler, Injector, Injectable} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/modulo-cadastrador/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage, PopoverPage} from "../pages/login/login";
import {ProdutoresPage} from "../pages/modulo-cadastrador/produtores/produtores";
import {MercadosPage} from "../pages/modulo-cadastrador/mercados/mercados";
import {ProdutosPage} from "../pages/modulo-cadastrador/produtos/produtos";
import {CategoriaProdutosComponent} from "../components/categoria-produtos/categoria-produtos";
import {MercadosComponent} from "../components/mercados/mercados";
import {ProdutoresComponent} from "../components/produtores/produtores";
import {RevendedoresPage} from "../pages/modulo-cadastrador/revendedores/revendedores"
import {RegistarRevendedoresPage, RegistarUnidadesMedidasPage, RegistarCategoriasPage, RegistarProdutosPage, RegistarProdutoresPage, RegistarMercadosPage} from "../pages/modulo-cadastrador/cadastros/Cadastros";
import {RevendedoresComponent} from "../components/revendedores/revendedores";
import {Camera} from "@ionic-native/camera";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import { AutenticacaoProvider } from '../providers/providers';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CategoriasProvider } from '../providers/categorias/categorias';
import {ProdutoresProvider} from "../providers/produtores/produtores";
import { RevendedorProvider } from '../providers/revendedor/revendedor';
import { MercadoProvider } from '../providers/mercado/mercado';
import {Geolocation} from "@ionic-native/geolocation";
import {GoogleMaps} from "@ionic-native/google-maps";
import {DisponibilizarProdutosPage} from "../pages/modulo-produtor/disponibilizar-produtos/disponibilizar-produtos";
import {ProdutosrequsitadosPage} from "../pages/modulo-produtor/produtosrequsitados/produtosrequsitados";
import {ProdutosDisponibilizadosPage} from "../pages/modulo-produtor/produtos-disponibilizados/produtos-disponibilizados";
import { ProcurasProvider } from '../providers/procuras/procuras';
import { ProduzProvider } from '../providers/produz/produz';
import { ProdutosProvider } from '../providers/produtos/produtos';
import {RegistarMeusProdutosPage} from "../pages/modulo-produtor/registar-meus-produtos/registar-meus-produtos";
import { UnidadeMedidaProvider } from '../providers/unidade-medida/unidade-medida';
import { OfertasProvider } from '../providers/ofertas/ofertas';
import { GerarCoresProvider } from '../providers/gerar-cores/gerar-cores';
import {RegistarProdutosDisponibilizadosPage} from "../pages/modulo-produtor/registar-produtos-disponibilizados/registar-produtos-disponibilizados";
import { UrlapiProvider } from '../providers/urlapi/urlapi';
import {DisponibilidadePage} from "../pages/modulo-produtor/disponibilidade/disponibilidade";
import {MostrarParcementoPage} from "../pages/modulo-produtor/mostrar-parcemento/mostrar-parcemento";
import { ConversorProvider } from '../providers/conversor/conversor';
import {PerfilPage} from "../pages/perfil/perfil";
import { MenuProvider } from '../providers/menu/menu';
import {InicioPage} from "../pages/modulo-revendedor/inicio/inicio";
import {PerfilRevendedorPage} from "../pages/modulo-revendedor/perfil-revendedor/perfil-revendedor";
import {RequisitarProdutosPage} from "../pages/modulo-revendedor/requisitar-produtos/requisitar-produtos";
import {MeusProdutosPage} from "../pages/modulo-revendedor/meus-produtos/meus-produtos";
import {DetalhesOfertasPage} from "../pages/modulo-revendedor/detalhes-ofertas/detalhes-ofertas";
import {RegistarInteressesPage} from "../pages/modulo-revendedor/registar-interesses/registar-interesses";
import { InteresseProvider } from '../providers/interesse/interesse';
import { NetworkProvider } from '../providers/network/network';
import {Network} from "@ionic-native/network";
import {Pro} from "@ionic/pro";


Pro.init('F2C642A4', {
  appVersion: '0.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      console.log(e);
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}






@NgModule({
  declarations: [
    MyApp,
    ProdutoresPage,
    MercadosPage,
    ProdutosPage,
    TabsPage,
    LoginPage,
    RegistarMercadosPage,
    RegistarProdutoresPage,
    RegistarProdutosPage,
    CategoriaProdutosComponent,
    MercadosComponent,
    ProdutoresComponent,
    RevendedoresComponent,
    RegistarCategoriasPage,
    RegistarUnidadesMedidasPage,
    RegistarRevendedoresPage,
    RevendedoresPage,
    DisponibilizarProdutosPage,
    ProdutosrequsitadosPage,
    ProdutosDisponibilizadosPage,
    RegistarMeusProdutosPage,
    RegistarProdutosDisponibilizadosPage,
    DisponibilidadePage,
    MostrarParcementoPage,
    PerfilPage,
    InicioPage,
    PerfilRevendedorPage,
    RequisitarProdutosPage,
    MeusProdutosPage,
    PopoverPage,
    DetalhesOfertasPage,
    RegistarInteressesPage
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProdutoresPage,
    MercadosPage,
    ProdutosPage,
    PopoverPage,
    TabsPage,
    LoginPage,
    RegistarMercadosPage,
    RegistarProdutoresPage,
    RegistarProdutosPage,
    RegistarCategoriasPage,
    RegistarUnidadesMedidasPage,
    RegistarRevendedoresPage,
    RevendedoresPage,
    DisponibilizarProdutosPage,
    ProdutosrequsitadosPage,
    ProdutosDisponibilizadosPage,
    RegistarMeusProdutosPage,
    RegistarProdutosDisponibilizadosPage,
    DisponibilidadePage,
    MostrarParcementoPage,
    PerfilPage,
    InicioPage,
    PerfilRevendedorPage,
    RequisitarProdutosPage,
    MeusProdutosPage,
    DetalhesOfertasPage,
    RegistarInteressesPage

  ],
  providers: [
    ConversorProvider,
    ProdutoresProvider,
    RevendedorProvider,
    MercadoProvider,
    Geolocation,
    GoogleMaps,
    ProcurasProvider,
    ProdutosProvider,
    ProduzProvider,
    GerarCoresProvider,
    OfertasProvider,
    UnidadeMedidaProvider,
    StatusBar,
    SplashScreen,
    Camera,
    NativeGeocoder,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    NetworkProvider,
    Network,
    AutenticacaoProvider,
    HttpClient,
    CategoriasProvider,
    ProcurasProvider,
    ProduzProvider,
    ProdutosProvider,
    ProdutosProvider,
    OfertasProvider,
    GerarCoresProvider,
    UrlapiProvider,
    MenuProvider,
    InteresseProvider,
  ]

})
export class AppModule {}
