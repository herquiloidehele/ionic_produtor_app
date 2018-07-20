import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {EscolherCategoriaPage} from "../../../escolher-categoria/escolher-categoria";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProdutosProvider} from "../../../../providers/produtos/produtos";
import {CategoriasProvider} from "../../../../providers/categorias/categorias";

/**
 * Generated class for the RegistarProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registar-produtos',
  templateUrl: 'registar-produtos.html',
})
export class RegistarProdutosPage {


  protected myFormGroup: FormGroup;
  protected categorias = [];

  protected produto = {
    designacao: '',
    categoria: {
      designacao: '',
      id: ''
    },
    variedades: [],
    lastVariedade: ''
  }


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public modalController: ModalController,
      public formBuilder: FormBuilder,
      public produtoProvider: ProdutosProvider,
      public categoriaProvider: CategoriasProvider
  ) {
    this.myFormGroup = this.createMyForm();
  }

  ionViewDidLoad() {
    this.buscarCategorias();
  }

  openCategorias(){
    let modal = this.modalController.create(EscolherCategoriaPage, {categorias: this.categorias});
    modal.onDidDismiss((categoria) => {
      this.produto.categoria = categoria.categoria;
    });
    modal.present();
  }

  protected createMyForm(){
    return this.formBuilder.group({
      produto: ['', Validators.required],
      categoria: ['', Validators.required],
      lastVariedade: ['', Validators.required]
    });
  }

  protected addVariedade(){
    this.produto.variedades.push(this.produto.lastVariedade);
    this.produto.lastVariedade = '';
  }


  protected salvarProduto(){
    this.produtoProvider.salvar(this.produto).subscribe(
      (response) => {
        console.log(response);
        this.navCtrl.pop();
      },
      (error) => {
        console.log(error);
      }
    );
  }



  protected buscarCategorias(){
    this.categoriaProvider.getAll().subscribe(
      (response) =>{
        console.log(response);
        this.categorias = response['categorias'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('busca de categorias');
      }
    );
  }


}
