import {NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CategoriaProdutosComponent} from "../components/categoria-produtos/categoria-produtos";
import {MercadosComponent} from "../components/mercados/mercados";
import {ProdutoresComponent} from "../components/produtores/produtores";
import {RevendedoresComponent} from "../components/revendedores/revendedores";
import {Camera} from "@ionic-native/camera";
import { AutenticacaoProvider } from '../providers/providers';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CategoriasProvider } from '../providers/categorias/categorias';
import {ProdutoresProvider} from "../providers/produtores/produtores";
import { RevendedorProvider } from '../providers/revendedor/revendedor';
import { MercadoProvider } from '../providers/mercado/mercado';
import { ProcurasProvider } from '../providers/procuras/procuras';
import { ProduzProvider } from '../providers/produz/produz';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { UnidadeMedidaProvider } from '../providers/unidade-medida/unidade-medida';
import { OfertasProvider } from '../providers/ofertas/ofertas';
import { GerarCoresProvider } from '../providers/gerar-cores/gerar-cores';
import { UrlapiProvider } from '../providers/urlapi/urlapi';
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
import {StartPage} from "../pages/start/start";
import {PaginaPrincipalPage} from "../pages/pagina-principal/pagina-principal";
import {RegistarOpertasPage} from "../pages/registar-opertas/registar-opertas";
import {TestePage} from "../pages/teste/teste";
import {PreviewPublicacaoPage} from "../pages/preview-publicacao/preview-publicacao";
import {ViewPublicacaoPage} from "../pages/view-publicacao/view-publicacao";
import {IonicStorageModule} from "@ionic/storage";
import { UserProvider } from '../providers/user/user';
import {File} from "@ionic-native/file/ngx";
import {WebView} from "@ionic-native/ionic-webview/ngx";
import {MercadoDetailsPageModule} from "../pages/mercado-details/mercado-details.module";
import {RevendedorProfilePageModule} from "../pages/revendedor-profile/revendedor-profile.module";
import {ProdutoMaisProduradosPageModule} from "../pages/produto-mais-produrados/produto-mais-produrados.module";
import {ProdutosDoMercadosPageModule} from "../pages/produtos-do-mercados/produtos-do-mercados.module";
import {ProcurasPageModule} from "../pages/procuras/procuras.module";
import {HideHeaderDirective} from "../directives/hide-header/hide-header";
import {MercadoPage} from "../pages/mercado/mercado";
import {PublicacoesPage} from "../pages/publicacoes/publicacoes";
import {DetalhesProcuraPageModule} from "../pages/detalhes-procura/detalhes-procura.module";
import {RevendedoresListPageModule} from "../pages/revendedores-list/revendedores-list.module";
import {ProdutoresListPageModule} from "../pages/produtores-list/produtores-list.module";
import {ProdutosListPageModule} from "../pages/produtos-list/produtos-list.module";
import {ProdutoSelectPageModule} from "../pages/produto-select/produto-select.module";
import {TermosCondicoesPageModule} from "../pages/termos-condicoes/termos-condicoes.module";
import {LoginPageModule} from "../pages/login/login.module";
import {EscolherProdutoPageModule} from "../pages/escolher-produto/escolher-produto.module";
import {AdicionarProdutosPageModule} from "../pages/adicionar-produtos/adicionar-produtos.module";
import {ProdutoEditPageModule} from "../pages/produto-edit/produto-edit.module";
import {PerfilPrivadoPageModule} from "../pages/perfil-privado/perfil-privado.module";
import {PerfilPublicoPageModule} from "../pages/perfil-publico/perfil-publico.module";
import {IonicImageViewerModule} from "ionic-img-viewer";
import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer/ngx';

@NgModule({
  declarations: [
    MyApp,
    StartPage,
    UserInfoPage,
    LocalizacaoPage,
    PaginaPrincipalPage,
    RegistarOpertasPage,
    PreviewPublicacaoPage,
    ViewPublicacaoPage,
    TestePage,
    CategoriaProdutosComponent,
    MercadosComponent,
    ProdutoresComponent,
    RevendedoresComponent,
    InicioPage,
    PerfilRevendedorPage,
    RequisitarProdutosPage,
    MeusProdutosPage,
    DetalhesOfertasPage,
    RegistarInteressesPage,
    EscolherCategoriaPage,
    CategoriaPage,
    MercadoPage,
    PublicacoesPage,
    HideHeaderDirective
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'produtor_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    }),

    MercadoDetailsPageModule,
    RevendedorProfilePageModule,
    ProdutoMaisProduradosPageModule,
    ProdutosDoMercadosPageModule,
    ProcurasPageModule,
    DetalhesProcuraPageModule,
    RevendedoresListPageModule,
    ProdutoresListPageModule,
    ProdutosListPageModule,
    ProdutoSelectPageModule,
    TermosCondicoesPageModule,
    LoginPageModule,
    EscolherProdutoPageModule,
    AdicionarProdutosPageModule,
    ProdutoEditPageModule,
    PerfilPrivadoPageModule,
    PerfilPublicoPageModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    UserInfoPage,
    LocalizacaoPage,
    PaginaPrincipalPage,
    RegistarOpertasPage,
    PreviewPublicacaoPage,
    ViewPublicacaoPage,
    TestePage,
    InicioPage,
    PerfilRevendedorPage,
    RequisitarProdutosPage,
    MeusProdutosPage,
    DetalhesOfertasPage,
    RegistarInteressesPage,
    EscolherCategoriaPage,
    CategoriaPage,
    MercadoPage,
    PublicacoesPage
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
    UserProvider,
    FileTransfer, FileTransferObject
  ]

})
export class AppModule {}
