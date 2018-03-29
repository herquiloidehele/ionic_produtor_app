import { Component } from '@angular/core';


import {ProdutoresPage} from "../produtores/produtores";
import {ProdutosPage} from "../produtos/produtos";
import {MercadosPage} from "../mercados/mercados";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProdutosPage;
  tab2Root = MercadosPage;
  tab3Root = ProdutoresPage;

  constructor() {

  }
}
