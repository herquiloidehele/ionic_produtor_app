import { Component } from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProdutosProvider} from "../../providers/produtos/produtos";
import {ProdutosListPage} from "../produtos-list/produtos-list";
import {UnidadeMedidaProvider} from "../../providers/unidade-medida/unidade-medida";
import {PublicacoesPage} from "../publicacoes/publicacoes";
import {PreviewPublicacaoPage} from "../preview-publicacao/preview-publicacao";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-registar-opertas',
  templateUrl: 'registar-opertas.html',
})
export class RegistarOpertasPage {

  protected produtos = [];
  protected unidadesMedida = [];
  protected formGroup: FormGroup;

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
    this.initializeValidator();
  }

  protected getAllProdutos(){
    this.produtosProvider.getAll().subscribe(
      response => {
        this.produtos = response['produtos'];
      }
    );
  }

  protected getUnidadesMedidas(){
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

  protected openProdutosSelect(){
    let modalControler = this.modalCtr.create(ProdutosListPage, {produtos: this.produtos});
    modalControler.present();

    modalControler.onDidDismiss((produto) => {
      this.publicacao.produtos_id = produto;
    });
  }


  protected publicar(){
    console.log(this.publicacao);
    this.navCtrl.setRoot(PublicacoesPage);

  }

  protected preview(){
    console.log(this.publicacao);
    this.navCtrl.push(PreviewPublicacaoPage, {publicacao: this.publicacao});
  }


  protected initializeValidator(){
    this.formGroup = new FormGroup({
      titulo: new FormControl('', [Validators.minLength(5), Validators.maxLength(25)]),
      preco: new FormControl('', [Validators.pattern('\\d+'), Validators.required]),
      quantidade: new FormControl('', [Validators.pattern('\\d+'), Validators.required]),
      unidade_medida_id: new FormControl('', [Validators.required]),
      produto_id: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.minLength(0), Validators.maxLength(150)]),
    });
  }



}
