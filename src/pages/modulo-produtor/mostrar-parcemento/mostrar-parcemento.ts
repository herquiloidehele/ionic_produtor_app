import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {OfertasProvider} from "../../../providers/ofertas/ofertas";
import {ConversorProvider} from "../../../providers/conversor/conversor";

/**
 * Generated class for the MostrarParcementoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-parcemento',
  templateUrl: 'mostrar-parcemento.html',
})
export class MostrarParcementoPage {

  protected oferta: any;
  protected parcelas: any[] = [];
  protected parcelamento_diferente = false;




  constructor(
            public navCtrl: NavController,
            public navParams: NavParams,
            public ofertaProvider: OfertasProvider,
            public alertController: AlertController,
            public conversorProvider: ConversorProvider
  ) {

  }

  ionViewWillLoad(){
    this.oferta = this.navParams.get('oferta');
    console.log(this.oferta);
  }


  ionViewDidLoad() {
  }


  alertPartesIguais1(){

    let unitConvestions = this.conversorProvider.getUnitConversions(this.oferta.unidades_medidas.designacao);

    if(unitConvestions.length > 1) {
      let alertUnidadesMedidas = this.alertController.create();

      alertUnidadesMedidas.setTitle('Unidade de Medida');
      alertUnidadesMedidas.setMessage('Em que Unidade de Medida deseja Parcelar?');
      for (let unidade of unitConvestions) {
        alertUnidadesMedidas.addInput({
          type: 'radio',
          label: unidade.designacao,
          value: unidade
        });
      }
      alertUnidadesMedidas.addButton({text: 'cancelar'});
      alertUnidadesMedidas.addButton({text: 'SALVAR', handler:  (dados) => {
        console.log(dados);
        this.alertPartesIguais2(dados);
      }});
      alertUnidadesMedidas.present();
    }else
      this.alertPartesIguais2(this.oferta.unidades_medidas);

  }


  alertPartesIguais2(unidade_medida){
    this.alertController.create({
      title: 'Parcelar em Partes Iguas',
      message: 'Quantidade e preço para cada parcela',
      inputs: [
        {name: 'quantidade', placeholder: 'Quantidade'},
        {name: 'preco', placeholder: 'Preço'}],
      buttons: [{text: 'cancelar'},
        {
          text: 'SALVAR', handler: (dados) => {
          console.log(dados);

          let parcelamento = {
            from: this.oferta.unidades_medidas.designacao,
            to: unidade_medida.designacao,
            quantidade: dados.quantidade,
            preco: dados.preco
          };

          let totalConvertido = this.conversorProvider.converter(parcelamento.from, parcelamento.to, this.oferta.quantidade);
          let numeroParcelas = totalConvertido / parcelamento.quantidade;



        }
        }
      ]
    }).present();


  }


   criarParcelamento(parcelamento){
    // let razaoConversao = this.conversorProvider.getRazaoConversao(this.oferta.unidades_medidas.designacao, parcelamento.unidades_medida.designacao);
    // console.log(razaoConversao);

    // let quantidade = this.conversorProvider.converter(dados.);
    // let parcelas =

  }





}
