import {NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/modulo-cadastrador/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {ProdutoresPage} from "../pages/modulo-cadastrador/produtores/produtores";
import {MercadosPage} from "../pages/modulo-cadastrador/mercados/mercados";
import {ProdutosPage} from "../pages/modulo-cadastrador/produtos/produtos";
import {CategoriaProdutosComponent} from "../components/categoria-produtos/categoria-produtos";
import {MercadosComponent} from "../components/mercados/mercados";
import {ProdutoresComponent} from "../components/produtores/produtores";
import {RevendedoresPage} from "../pages/modulo-cadastrador/revendedores/revendedores"
import {RegistarRevendedoresPage, RegistarUnidadesMedidasPage, RegistarCategoriasPage, RegistarProdutosPage, RegistarProdutoresPage, RegistarMercadosPage} from "../pages/modulo-cadastrador/cadastros/Cadastros";
import {RevendedoresComponent} from "../components/revendedores/revendedores";
import {Camera} from "@ionic-native/camera/ngx";
import { AutenticacaoProvider } from '../providers/providers';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CategoriasProvider } from '../providers/categorias/categorias';
import {ProdutoresProvider} from "../providers/produtores/produtores";
import { RevendedorProvider } from '../providers/revendedor/revendedor';
import { MercadoProvider } from '../providers/mercado/mercado';
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
import {InicioPage} from "../pages/modulo-revendedor/inicio/inicio";
import {PerfilRevendedorPage} from "../pages/modulo-revendedor/perfil-revendedor/perfil-revendedor";
import {RequisitarProdutosPage} from "../pages/modulo-revendedor/requisitar-produtos/requisitar-produtos";
import {MeusProdutosPage} from "../pages/modulo-revendedor/meus-produtos/meus-produtos";
import {DetalhesOfertasPage} from "../pages/modulo-revendedor/detalhes-ofertas/detalhes-ofertas";
import {RegistarInteressesPage} from "../pages/modulo-revendedor/registar-interesses/registar-interesses";
import { InteresseProvider } from '../providers/interesse/interesse';
import { NetworkProvider } from '../providers/network/network';
import {Network} from "@ionic-native/network";
import {EscolherCategoriaPage} from "../pages/escolher-categoria/escolher-categoria";
import {CategoriaPage} from "../pages/categoria/categoria";
import {LocalizacaoPage} from "../pages/localizacao/localizacao";
import {UserInfoPage} from "../pages/user-info/user-info";
import { JsonProvider } from '../providers/json/json';
import {EscolherProdutoPage} from "../pages/escolher-produto/escolher-produto";
import {StartPage} from "../pages/start/start";
import {ShowEscolherProdutosPage} from "../pages/show-escolher-produtos/show-escolher-produtos";
import {PerfilPrivadoPage} from "../pages/perfil-privado/perfil-privado";
import {PerfilPublicoPage} from "../pages/perfil-publico/perfil-publico";
import {PaginaPrincipalPage} from "../pages/pagina-principal/pagina-principal";
import {PublicacoesPage} from "../pages/publicacoes/publicacoes";
import {HideHeaderDirective} from "../directives/hide-header/hide-header";
import {RegistarOpertasPage} from "../pages/registar-opertas/registar-opertas";
import {TestePage} from "../pages/teste/teste";
import {ProdutosListPage} from "../pages/produtos-list/produtos-list";
import {PreviewPublicacaoPage} from "../pages/preview-publicacao/preview-publicacao";
import {ViewPublicacaoPage} from "../pages/view-publicacao/view-publicacao";
import {IonicStorageModule} from "@ionic/storage";
import { UserProvider } from '../providers/user/user';
import {File} from "@ionic-native/file/ngx";
import {WebView} from "@ionic-native/ionic-webview/ngx";


@NgModule({
  declarations: [
    MyApp,
    StartPage,
    ProdutoresPage,
    UserInfoPage,
    LocalizacaoPage,
    ShowEscolherProdutosPage,
    EscolherProdutoPage,
    PaginaPrincipalPage,
    PublicacoesPage,
    RegistarOpertasPage,
    PreviewPublicacaoPage,
    ViewPublicacaoPage,
    TestePage,
    ProdutosListPage,
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
    PerfilPrivadoPage,
    PerfilPublicoPage,
    InicioPage,
    PerfilRevendedorPage,
    RequisitarProdutosPage,
    MeusProdutosPage,
    DetalhesOfertasPage,
    RegistarInteressesPage,
    EscolherCategoriaPage,
    CategoriaPage,
    HideHeaderDirective
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'produtor_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    ProdutoresPage,
    UserInfoPage,
    LocalizacaoPage,
    ShowEscolherProdutosPage,
    EscolherProdutoPage,
    PaginaPrincipalPage,
    PublicacoesPage,
    RegistarOpertasPage,
    ProdutosListPage,
    PreviewPublicacaoPage,
    ViewPublicacaoPage,
    TestePage,
    MercadosPage,
    ProdutosPage,
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
    PerfilPrivadoPage,
    PerfilPublicoPage,
    InicioPage,
    PerfilRevendedorPage,
    RequisitarProdutosPage,
    MeusProdutosPage,
    DetalhesOfertasPage,
    RegistarInteressesPage,
    EscolherCategoriaPage,
    CategoriaPage

  ],
  providers: [
    ConversorProvider,
    ProdutoresProvider,
    JsonProvider,
    RevendedorProvider,
    MercadoProvider,
    ProcurasProvider,
    ProdutosProvider,
    ProduzProvider,
    GerarCoresProvider,
    OfertasProvider,
    UnidadeMedidaProvider,
    StatusBar,
    SplashScreen,
    Camera,
    File,
    WebView,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
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
    InteresseProvider,
    JsonProvider,
    UserProvider
  ]

})
export class AppModule {}
