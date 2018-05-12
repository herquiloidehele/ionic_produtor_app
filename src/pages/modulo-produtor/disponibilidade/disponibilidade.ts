import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProcurasProvider} from "../../../providers/procuras/procuras";

/**
 * Generated class for the DisponibilidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disponibilidade',
  templateUrl: 'disponibilidade.html',
})
export class DisponibilidadePage {


  protected requisicao: any;
  protected produtores: any = [];
  protected saveOrUpdate: boolean;

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public procuraController: ProcurasProvider,
              public alertController: AlertController) {
    this.requisicao = this.navParams.get('requisicao');
  }

  ionViewDidLoad() {
    this.getProdutores(this.requisicao.procura.id);
  }

  ionViewWillLoad(){

  }

  getLetrasIniciais(nome){
    let nomes = nome.split(' ');
    return nomes[0].charAt(0) + nomes[nomes.length-1].charAt(0);
  }


  getProdutores(requisicao_id){
    this.procuraController.getProdutores(requisicao_id).subscribe(
      (response) => {
        this.produtores = response.produtores;
        console.log(response);
      },
      (erros) => {
        console.log(erros);
      },
      () => {
       this.saveOrUpdate = this.salvarOrActualizar();
      }
    );
  }


  alertDisponibilidade(saveOrUpadade: String){
    this.alertController.create(
      {
        title: 'Disponibilidade',
        inputs: [
          {
            name: 'quantidade',
            placeholder: 'Quantidade',
            type: 'number'
          },
          {
            name: 'preco',
            placeholder: 'Preço',
            type: 'number'
          }
          ],

        buttons: [
          {
            text: 'CANCELAR',
          },
          {
            text: 'SALVAR',
            handler: (dados) => {

              let disponibilidade = {
                procuras_id: this.requisicao.procura.id,
                produtores_id: JSON.parse(localStorage.getItem('user')).id,
                preco: dados.preco,
                quantidade: dados.quantidade
              };

              if(saveOrUpadade == 'salvar')
                this.salvarDisponibilidade(disponibilidade);
              else
                this.actualizarDisponibilidade(disponibilidade);
            }
          }

        ]
      }
    ).present();
  }


  salvarDisponibilidade(dados){
    this.procuraController.salvarDisponibilidade(dados).subscribe(
      (response) => {
        console.log(response);
      },
      (erros) => {
        console.log(erros);
      },
      () => {
        this.getProdutores(this.requisicao.procura.id);
      }
    );
  }

  actualizarDisponibilidade(dados){

    let disponivilidade_id = this.getDisponibilidade_id(dados.produtores_id);

    this.procuraController.actualizarDisponibilidade(dados, disponivilidade_id).subscribe(
      (response) => {
        console.log(response);
      },
      (erros) => {
        console.log(erros);
      },
      () => {
        this.getProdutores(this.requisicao.procura.id);
      }
    );
  }


  /**
   * Verifica se o produtor Logado ja fez alguma disponibilizacao de produtos
   *
   */
  salvarOrActualizar(){
    let produtor_id = JSON.parse(localStorage.getItem('user')).id;

    for(let produtor of this.produtores){
      if (produtor.id == produtor_id)
        return false;
    }
    return true;
  }



  private getDisponibilidade_id(produtor_id){
    for(let produtor of this.produtores){
      if(produtor.id == produtor_id)
        return produtor.pivot.id;
    }
    return 0;
  }




}
