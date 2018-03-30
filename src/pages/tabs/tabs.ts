import { Component } from '@angular/core';


import {ProdutoresPage} from "../produtores/produtores";
import {ProdutosPage} from "../produtos/produtos";
import {MercadosPage} from "../mercados/mercados";
import {RevendedoresPage} from "../revendedores/revendedores";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProdutosPage;
  tab2Root = MercadosPage;
  tab3Root = ProdutoresPage;
  tab4Root = RevendedoresPage;

  constructor() {

  }
}
