import { Component } from '@angular/core';


import {ProdutoresPage} from "../produtores/produtores";
import {ProdutosPage} from "../produtos/produtos";
import {MercadosPage} from "../mercados/mercados";
import {RevendedoresPage} from "../revendedores/revendedores";
import {AlertController, NavController, NavParams} from "ionic-angular";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProdutosPage;
  tab2Root = MercadosPage;
  tab3Root = ProdutoresPage;
  tab4Root = RevendedoresPage;

  user: any;
  tipoUser : any;


  constructor(
      public navControl: NavController,
      public alertController: AlertController,
      public navParam: NavParams
  ) {



  }





}

