import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {UnidadeMedidaProvider} from "../../providers/unidade-medida/unidade-medida";
import {InteresseProvider} from "../../providers/interesse/interesse";
import {ProduzProvider} from "../../providers/produz/produz";



@IonicPage()
@Component({
  selector: 'page-produto-edit',
  templateUrl: 'produto-edit.html',
})
export class ProdutoEditPage {


  protected produto = {};
  protected showDescription = false;
  protected showQuantidade = false;
  protected showEpoca = false;
  protected unidadesMedidas = [];
  protected quantidade = {
    unidades_medidas_id: '',
    quantidade: ''
  };

  protected epocas = [];
  protected epoca = {
    inicio: '',
    fim: ''
  };

  protected produtoInfo = {
    descricao: null,
    quantidade: null,
    unidadeMedida: null,
    epocas: []
  };
  protected descricao;
  protected meses : String[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];


  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public navParams: NavParams,
    public urlProvider: UrlapiProvider,
    public unidadeMedidaProvider: UnidadeMedidaProvider,
    public produzProvider: ProduzProvider
  ) {
    this.produto = this.navParams.get('produto');
    console.log(this.produto);
  }

  ionViewDidLoad() {
    this.getProduzInfo();
  }


  protected getUnidadesMedida(){
    this.unidadeMedidaProvider.getAll().subscribe((response) => {
      console.log(response);
      this.unidadesMedidas = response['unidades_medidas'];
    },
      (error) => {
        console.log(error);
      }
    );
  }


  protected getProduzInfo(){
    this.produzProvider.getProduz(this.produto['pivot']['id']).subscribe(
      (responseList) => {
        let response1 = responseList[0];
        let response2 = responseList[1];
        console.log(responseList);
        this.produtoInfo.quantidade = response1['produz']['quantidade'];
        this.produtoInfo.descricao = response1['produz']['descricao'];
        this.produtoInfo.unidadeMedida = response1['produz']['unidades_medida'];
        this.produtoInfo.epocas = response2['epocas'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.getUnidadesMedida();
      }
    );
  }



  protected togleQuantidade(){
    this.showQuantidade = !this.showQuantidade;
  }


  public togleDescription(){
    this.showDescription = !this.showDescription;
  }

  public togleEpoca(){
    this.showEpoca = !this.showEpoca;
  }

  public setUnidadeMedida(unidade){
    console.log(unidade);
    this.quantidade.unidades_medidas_id = unidade.id;
  }

  public setEpocaInicio(epoca){
    this.epoca.inicio = epoca;
  }

  public setEpocaFim(epoca){
    this.epoca.fim = epoca;
  }


  protected salvarDescricao(){
    if (this.descricao != null) {
      this.produzProvider.updateProduz(this.produto['pivot']['id'], {descricao: this.descricao}).subscribe(
        (response) => {
          console.log(response);
          this.produtoInfo.descricao = response['produz']['descricao'];
          this.togleDescription();
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      this.showMessage("Descrição inválida", "Verifique se adicionou uma descrição válida")
    }
  }

  protected salvarQuantidade(){
    if ((this.quantidade.quantidade != null && this.quantidade.unidades_medidas_id != null)  && (this.quantidade.quantidade != '' && this.quantidade.unidades_medidas_id != '' )) {
      this.produzProvider.updateProduz(this.produto['pivot']['id'], this.quantidade).subscribe(
        (response) => {
          console.log(response);
          this.produtoInfo.quantidade = response['produz']['quantidade'];
          this.produtoInfo.unidadeMedida = response['produz']['unidades_medida'];
          this.togleQuantidade();
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      this.showMessage('Quantidades Invalidas', 'Verifique se colocou correctamente os valores');
    }
  }

  protected salvarEpocas(){
    this.epocas = [];
    this.epocas.push(this.epoca);

    if (this.epocas.length > 0 && this.isEpocaValida(this.epoca.inicio, this.epoca.fim)) {
      this.produzProvider.salvarEpocas(this.produto['pivot']['id'], this.epocas).subscribe(
        (response) => {
          console.log(response);
          this.produtoInfo.epocas = response['epocas'];
          this.togleEpoca();
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      this.showMessage('Época Inválida', 'Verifique se colocou correctamente os meses');
    }
  }




  private isEpocaValida(inicio, fim){
    let epocaInicio = this.meses.indexOf(inicio);
    let epocaFim = this.meses.indexOf(fim);

    if(epocaInicio >= 0 && epocaFim >= 0)
      return epocaFim > epocaInicio;
    else
      return false;
  }



  private async showMessage(title: string, message: string){
    const aletrer = await this.alertController.create({
      'title' : title,
      'message': message,
      buttons: ['ok']
    });

    aletrer.present()
  }






}
