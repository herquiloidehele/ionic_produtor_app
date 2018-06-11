import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {OfertasProvider} from "../../providers/ofertas/ofertas";
import {ConversorProvider} from "../../providers/conversor/conversor";

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


  alertPartesIguais2(unidadeMedida){
    let alertPercelamento  = this.alertController.create();
    alertPercelamento.setTitle('Parcelar em Partes Iguas');
    alertPercelamento.setMessage('Quantidade e preço para cada parcela');



    alertPercelamento.addInput({name: 'quantidade', placeholder: 'Quantidade'});
    alertPercelamento.addInput({name: 'preco', placeholder: 'Preço'});
    alertPercelamento.addButton({text: 'cancelar'});
    alertPercelamento.addButton({text: 'SALVAR', handler: function (dados) {

      let parcelamento = {
        to: unidadeMedida.designacao,
        quantidade: dados.quantidade,
        preco: dados.preco
      };

      // let razaoConversao = this.conversorProvider.getRazaoConversao(this.oferta.unidades_medidas.designacao, parcelamento.unidades_medida.designacao);
      // console.log(razaoConversao);

    }
    });
    alertPercelamento.present();

  }



  parcealr(parcelamento){
    alert('parcelamento');
  }


   criarParcelamento(parcelamento){
    // let razaoConversao = this.conversorProvider.getRazaoConversao(this.oferta.unidades_medidas.designacao, parcelamento.unidades_medida.designacao);
    // console.log(razaoConversao);

    // let quantidade = this.conversorProvider.converter(dados.);
    // let parcelas =

  }





}
