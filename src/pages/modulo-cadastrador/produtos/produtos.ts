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

  protected categorias = [];
  protected copyCategorias = [];
  protected showSearch: boolean = false;

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
          this.copyCategorias = this.categorias;
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


  showSeachBar(){
    if(this.showSearch == true)
      this.showSearch = false;
    else
      this.showSearch = true;
  }

  hideSearchBar(){
    this.showSearch = false;
  }

  getItems(evento){
    this.categorias = this.copyCategorias;

    let pesquisa = evento.target.value;

    if(pesquisa && pesquisa.trim() != '') {
      this.categorias = this.categorias.filter((categoria) => {
        return (categoria.designacao.toLowerCase().indexOf(pesquisa.trim().toLowerCase()) > -1);
      });
    }
  }



}
