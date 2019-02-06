import { Component } from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProdutosProvider} from "../../providers/produtos/produtos";
import {ProdutosListPage} from "../produtos-list/produtos-list";
import {UnidadeMedidaProvider} from "../../providers/unidade-medida/unidade-medida";
import {PublicacoesPage} from "../publicacoes/publicacoes";
import {PreviewPublicacaoPage} from "../preview-publicacao/preview-publicacao";

@IonicPage()
@Component({
  selector: 'page-registar-opertas',
  templateUrl: 'registar-opertas.html',
})
export class RegistarOpertasPage {

  protected produtos = [];
  protected unidadesMedida = [];

  protected publicacao = {
    designacao: null,
    descricao: null,
    preco: null,
    quantidade: null,
    unidades_medidas_id: null,
    produtos_id: '',
    distritos_id: null,


  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    public modalCtr: ModalController,
    public medidasProvider: UnidadeMedidaProvider,
  ) {
    this.getAllProdutos();
    this.getUnidadesMedidas();
  }

  getAllProdutos(){
    this.produtosProvider.getAll().subscribe(
      response => {
        this.produtos = response['produtos'];
      }
    );
  }

   getUnidadesMedidas(){
    if(this.unidadesMedida.length == 0){
       this.medidasProvider.getAll().subscribe(
        (response) => {
          this.unidadesMedida = response['unidades_medidas'];
        }
      );
    }
  }
  //
  // getProdutoSelecionado(produto){
  //   this.produtoSelecionado = produto;
  //   console.log(produto);
  // }

  openProdutosSelect(){
    let modalControler = this.modalCtr.create(ProdutosListPage, {produtos: this.produtos});
    modalControler.present();

    modalControler.onDidDismiss((produto) => {
      this.publicacao.produtos_id = produto;
    });
  }


  publicar(){
    console.log(this.publicacao);
    this.navCtrl.setRoot(PublicacoesPage);

  }

  preview(){
    console.log(this.publicacao);
    this.navCtrl.push(PreviewPublicacaoPage, {publicacao: this.publicacao});
  }

}
