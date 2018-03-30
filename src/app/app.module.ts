import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {ProdutoresPage} from "../pages/produtores/produtores";
import {MercadosPage} from "../pages/mercados/mercados";
import {ProdutosPage} from "../pages/produtos/produtos";
import {CategoriaProdutosComponent} from "../components/categoria-produtos/categoria-produtos";
import {MercadosComponent} from "../components/mercados/mercados";
import {ProdutoresComponent} from "../components/produtores/produtores";
import {RegistarUnidadesMedidasPage, RegistarCategoriasPage, RegistarProdutosPage, RegistarProdutoresPage, RegistarMercadosPage} from "../pages/cadastros/Cadastros";


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
    RegistarCategoriasPage,
    RegistarUnidadesMedidasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProdutoresPage,
    MercadosPage,
    ProdutosPage,
    TabsPage,
    LoginPage,
    RegistarMercadosPage,
    RegistarProdutoresPage,
    RegistarProdutosPage,
    RegistarCategoriasPage,
    RegistarUnidadesMedidasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
