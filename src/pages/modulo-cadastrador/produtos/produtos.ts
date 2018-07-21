import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistarProdutosPage} from "../cadastros/registar-produtos/registar-produtos";
import {RegistarCategoriasPage} from "../cadastros/registar-categorias/registar-categorias";
import {RegistarUnidadesMedidasPage} from "../cadastros/registar-unidades-medidas/registar-unidades-medidas";
import {CategoriasProvider} from "../../../providers/categorias/categorias";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoriaPage} from "../../categoria/categoria";



@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
  entryComponents: [RegistarProdutosPage, RegistarCategoriasPage, RegistarUnidadesMedidasPage],
})
export class ProdutosPage {

  protected categorias;

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaProvider: CategoriasProvider) {
  }



  ionViewWillEnter(){
    this.listarProdutos();
  }


  public listarProdutos(){
    this.categoriaProvider.getAll().subscribe(
        (resultado) =>{
          console.log(resultado);
          this.categorias = resultado['categorias'];
        },
        (erros: HttpErrorResponse) =>{
          console.log(erros);
        },
        () =>{console.log('Terminado')}
    );
  }

  onClickRegistarProdutos(){
    this.navCtrl.push(RegistarProdutosPage);
  }

  onClickRegistarCategorias(){
    this.navCtrl.push(RegistarCategoriasPage);
  }

  onClickRegistarUnidadeMedida(){
    this.navCtrl.push(RegistarUnidadesMedidasPage);
  }

  onClickCardCategoria(categoria){
    this.navCtrl.push(CategoriaPage, {categoria: categoria});
  }


}
