import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RevendedorProfilePage} from "../revendedor-profile/revendedor-profile";
import {ProdutoMaisProduradosPage} from "../produto-mais-produrados/produto-mais-produrados";
import {ProdutosDoMercadosPage} from "../produtos-do-mercados/produtos-do-mercados";
import {MercadoProvider} from "../../providers/mercado/mercado";

@IonicPage()
@Component({
  selector: 'page-mercado-details',
  templateUrl: 'mercado-details.html',
})
export class MercadoDetailsPage {


  protected mercado ;
  protected titulos = "Revendedores";
  protected produtosMercado = [];
  protected produtosMaisProcurados = [];


  @ViewChild(Content) protected content: Content;
  @ViewChild('ion_segment') protected divElementTabs: HTMLDivElement;
  @ViewChild('divElment') protected divElementOptions: HTMLDivElement;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mercadosProvider: MercadoProvider
  ) {
    this.mercado = this.navParams.get('mercado');
  }

  ionViewWillEnter() {
    this.getProdutosMercado();
  }


  segmentChanged(evento){
    this.content.scrollTo(0, 190);
  }


  onScroll(event){
    console.log(event);
  }

  onScrollStart(){
    console.log("Scroll Iniciou");
  }

  onScrollEnd(){
    console.log("Scroll Terminou");
  }

  public getProdutosMercado(){
    this.mercadosProvider.getProdutosMercado(this.mercado['id']).subscribe(
      (responseList) => {
        console.log(responseList);
        this.produtosMercado = responseList[0]['produtos'];
        this.produtosMaisProcurados = responseList[1]['produtos'];
      },
      (error) => {
        console.log(error);
      }
    )
  }


  goToRevendedor(revendedor){
    this.navCtrl.push(RevendedorProfilePage, {revendedor_id: revendedor.id});
  }

  goToProdutosMaisProcurados(){
    this.navCtrl.push(ProdutoMaisProduradosPage, {produtos: this.produtosMaisProcurados, mercado: this.mercado});
  }

  goToProdutosDoMercado(){
    this.navCtrl.push(ProdutosDoMercadosPage, {produtos: this.produtosMercado, mercado: this.mercado});
  }


  voltar(){
    this.navCtrl.pop();
  }
}
