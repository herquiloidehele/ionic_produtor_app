import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {OfertasProvider} from "../../providers/ofertas/ofertas";
import {Storage} from "@ionic/storage";
import {UrlapiProvider} from "../../providers/urlapi/urlapi";


@IonicPage()
@Component({
  selector: 'page-preview-publicacao',
  templateUrl: 'preview-publicacao.html',
})
export class PreviewPublicacaoPage {


  protected publicacao: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ofertasProvider: OfertasProvider,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public urlApiProvider: UrlapiProvider,
    public storage: Storage
    ) {

  }

  ionViewDidLoad() {
    this.publicacao = this.navParams.get('publicacao');
  }


  voltar(){
    this.navCtrl.pop();
  }

  publicar(){

    let novaPublicacao = this.transformPublicacao(this.publicacao);
    console.log({novaPublicacao: novaPublicacao});

    const loading = this.loadingController.create({content: 'Publicando'});
    loading.present();

    this.ofertasProvider.salvarOferta(novaPublicacao).subscribe((response) => {
      console.log(response);
      this.actualizarProdutos(this.publicacao.produtos_id);
      loading.dismiss();
      this.navCtrl.popToRoot();
    },
      (error) => {
        loading.dismiss();
        this.showAlert("Erro ao Publicar", "Ocorreu algum erro ao Submeter \n Verifique a sua Internet")
        console.log(error);
      }
      );
  }

  private actualizarProdutos(produto){

    console.log(produto);
    this.storage.get('user').then((user) => {

      const produtoFilter = user.produtos_produzidos.filter((produzidos) => {
        return produzidos['id'] == produto['id'];
      });

      if(produtoFilter.length == 0){
        user.produtos_produzidos.push(produto);
        this.storage.set('user', user).then((response)=>{
          console.log("Produto adicionado");
        });
      }else{
        console.log("o produto ja faz parte")
      }
    }).catch((error) => {
      console.log(error);
    });

  }



  private transformPublicacao(publicacao){
    return {
      designacao: publicacao.designacao,
      descricao: publicacao.descricao,
      preco: publicacao.preco,
      quantidade: publicacao.quantidade,
      unidades_medidas_id: publicacao.unidades_medidas_id['id'],
      produtos_id: publicacao.produtos_id['id'],
      distritos_id: publicacao.distritos_id['id'],
      produtores_id: publicacao.produtores_id,
      is_preco_unidade: publicacao.is_preco_unidade
    };
  }
  private showAlert(titulo, mensagem){
    this.alertController.create({message: mensagem, title: titulo, buttons:['ok']}).present();
  }



}
