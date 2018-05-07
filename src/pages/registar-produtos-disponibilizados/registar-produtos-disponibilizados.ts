import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProdutosProvider} from "../../providers/produtos/produtos";
import {UnidadeMedidaProvider} from "../../providers/unidade-medida/unidade-medida";

/**
 * Generated class for the RegistarProdutosDisponibilizadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registar-produtos-disponibilizados',
  templateUrl: 'registar-produtos-disponibilizados.html',
})
export class RegistarProdutosDisponibilizadosPage {


  oferta: any = {
    produto: null,
    preco: 0,
    quantidade: 0,
    unidades_medidas: null,
    data_fim: null
  };

  produtos: any[];
  unidades_medidas: any[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertController: AlertController,
              public produtodProvider: ProdutosProvider,
              public uniadesMedidasProvider: UnidadeMedidaProvider) {
    this.getProdutos();
    this.getUnidadesMedidas();
  }


  getProdutos() {
    this.produtodProvider.getAll().subscribe(
      (response) => {
        this.produtos = response['produtos'];
      },
      (erros) => {
        console.log(erros);
      }
    );
  }


  getUnidadesMedidas() {
    this.uniadesMedidasProvider.getAll().subscribe(
      (response) => {
        this.unidades_medidas = response['unidades_medidas'];
      },
      (erros) => {
        console.log(erros);
      }
    );
  }


  itemSelected(atributo: string) {
    let alert = this.alertController.create();

    switch (atributo) {

      case 'produto': {
        alert.setTitle('Selecione um Produto');
        for (let produto of this.produtos) {
          alert.addInput({
            type: 'radio',
            label: produto.designacao,
            value: produto,
          });
        }

        alert.addButton({text: 'CANCEL'});
        alert.addButton(
          {
            text: 'SALVAR',
            handler: (dados) => {
              if(!dados)
                return false;
              else
                console.log(dados);
            }
          }
        );
      }break;


      case 'unidadeMedida' : {
        alert.setTitle('Unidade de Medida');
        for (let unidadeMedida of this.unidades_medidas) {
          alert.addInput({
            type: 'radio',
            label: unidadeMedida.designacao,
            value: unidadeMedida
          });
        }
        alert.addButton({text: 'CANCEL'});
        alert.addButton(
          {
            text: 'SALVAR',
            handler: (dados) => {
              if(!dados)
                return false;
              else
                console.log(dados);
            }
          }
        );
      }break;

      case 'quantidade': {

        alert.setTitle('Introduza a Quantidade');
        alert.addInput({
          name: 'quantidade',
          placeholder: 'Quantidade'
        });

        alert.addButton({text: 'CANCEL'});
        alert.addButton(
          {
            text: 'SALVAR',
            handler: (dados) => {
              if(!dados)
                return false;
              else
                console.log(dados);
            }
          }
        );
      }break;


      case 'preco': {

        alert.setTitle('Introduza o Preco');
        alert.addInput({
          name: 'preco',
          placeholder: 'Preco'
        });

        alert.addButton({text: 'CANCEL'});
        alert.addButton(
          {
            text: 'SALVAR',
            handler: (dados) => {if(!dados)
              return false;
            else
              console.log(dados);console.log(dados);
            }
          }
        );
      }break;




      case 'data_fim': {

        alert.setTitle('Introduza o data Limite');
        alert.addInput({
          name: 'data_fim',
          placeholder: 'data limite'
        });

        alert.addButton({text: 'CANCEL'});
        alert.addButton(
          {
            text: 'SALVAR',
            handler: (dados) => {
              if(!dados)
                return false;
              else
                console.log(dados);
            }
          }
        );
      }break;


    }

    alert.present();

  }


}



