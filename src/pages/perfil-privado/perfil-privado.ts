import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {AdicionarProdutosPage} from "../adicionar-produtos/adicionar-produtos";
import {ProdutosProvider} from "../../providers/produtos/produtos";
import {ProdutoEditPage} from "../produto-edit/produto-edit";
import {UserProvider} from "../../providers/user/user";
import {ProdutoresProvider} from "../../providers/produtores/produtores";
import {JsonProvider} from "../../providers/json/json";

@IonicPage()
@Component({
  selector: 'page-perfil-privado',
  templateUrl: 'perfil-privado.html',
})
export class PerfilPrivadoPage {

  protected user;
  protected produtos;
  protected showBackButton = false;
  protected provincias = [];
  protected distritos = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storageController: Storage,
    public alertController: AlertController,
    public modalCtr: ModalController,
    public userProvider: UserProvider,
    public produtorProvider: ProdutoresProvider,
    public loadingController: LoadingController,
    public produtosController: ProdutosProvider,
    public jsonProvider: JsonProvider
    ) {

    this.showBackButton = this.navParams.get('showBackButton');
  }

  ionViewWillEnter(){
    this.getuserFromStorage();
  }

  protected getProvincias(){
    this.jsonProvider.getProvincias().subscribe(
      (response) => {
        this.provincias = response['provincias'];
        console.log(this.provincias);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete Provinces');
      }
    );
  }


  protected openAlertProvincias(){
    let alert = this.alertController.create({
      subTitle: "Selecione a Província",
      buttons: [
        {
          text: "CANCEL"
        },
        {
          text: "OK",
          handler: (provincia) => {
            console.log(provincia);
            this.openAlertDistritos(provincia.distritos);
          }
        }
      ]
    });


    for(let provincia of this.provincias){
      alert.addInput({name: "provincia", type: "radio", label: provincia.designacao, value: provincia});
    }

    alert.present();



  }

  protected openAlertDistritos(distritos){
    let alert = this.alertController.create({
      subTitle: "Selecione o Distrito",
      buttons: [
        {
          text: "CANCEL"
        },
        {
          text: "OK",
          handler: (distrito) => {
            console.log(distrito);
            this.updateUserDistritos({distritos_id: distrito.id}, this.user.user.id, distrito);
          }
        }
      ]
    });


    for(let distrito of distritos){
      alert.addInput({name: "distrito", type: "radio", label: distrito.designacao, value: distrito});
    }

    alert.present();
  }

  protected openAlert(name, title, placeholder){
    this.alertController.create({
      subTitle: title,
      inputs: [{
        name: name,
        placeholder: placeholder
      }
      ],
      buttons: [
        {
          text: "CANCEL",
        },
        {
          text: "SALVAR",
          handler: (dados) => {
            console.log(dados);
            if(name == 'nome')
              this.updateUserName(dados, this.user.user.id);
            if(name == 'username')
              this.updateUserPhone(dados, this.user.user.id);
          }
        }
      ]
    }).present();

  }


  protected updateUserDistritos(produtorData, id, distrito){
    console.log(produtorData);

    const loading = this.loadingController.create({content: 'Aguarde'});
    loading.present();


    this.produtorProvider.update(produtorData, id).subscribe(
      (response) => {
        console.log(response);
        this.user.distrito = distrito;
        loading.dismiss()
      },
      (error) => {
        console.log(error);
        loading.dismiss()
      },
      () => { }
    );
  }


  protected updateUserName(userData, id){

    const loading = this.loadingController.create({content: 'Aguarde'});
    loading.present();


    this.userProvider.updateUser(userData, id).subscribe(
      (response) => {
        console.log(response);
        this.user.user.nome = userData.nome;
        loading.dismiss()
      },
      (error) => {
        console.log(error);
        loading.dismiss()
      },
      () => { }
    );
  }


  protected updateUserPhone(userData, id){

    const loading = this.loadingController.create({content: 'Aguarde'});
    loading.present();


    this.userProvider.updateUser(userData, id).subscribe(
      (response) => {
        console.log(response);
        this.user.telefone = userData.username;
        this.user.user.username = userData.username;
        loading.dismiss()
      },
      (error) => {
        console.log(error);
        loading.dismiss()
      },
      () => { }
    );
  }



  protected getuserFromStorage(){
    this.storageController.get('user').then(
      (response) => {
        console.log({storage: response});
        this.user = response;
        this.getProdutos();
      }
    ).catch((error) => {
      console.log(error);
      this.showErrorAlert();
    });
  }

  private async showErrorAlert(){
    const alert = this.alertController.create({
      'title': 'Erro',
      'message': 'Não foi possivel carregar os dados do utilizador, Feche e volte a abrir a aplicação',
      buttons: ['ok']
    });

    await alert.present();

  }

  protected getImagesCount(){
    let quantidade = 0;
    if(this.user['ofertas'].length == 0)
      return 0;
    else{

      this.user['ofertas'].forEach((oferta) => {
        oferta['imagens'].forEach((imagem) => {
          quantidade++;
        })
      });

      return quantidade;
    }
  }



  protected gotToAdicionar(){
    let modalControler = this.modalCtr.create(AdicionarProdutosPage, {produtos: this.produtos, produtos_produzidos: this.user['produtos_produzidos']});
    modalControler.present();

    modalControler.onDidDismiss((produto) => {

      this.produtosController.adicionarProdutosProduzidos(this.user.id, produto.id).subscribe((response) => {
        this.user['produtos_produzidos'].push(produto);
        this.storageController.set('user', this.user);
      },
        (error) => {
          console.log(error);
        });
    });
  }

  protected goToProditoEdit(produto){
    console.log(produto);
    this.navCtrl.push(ProdutoEditPage, {produto: produto});
  }

  protected getProdutos(){
    this.produtosController.getAllProdutos(this.user['produtos_produzidos']).subscribe(
      (response) => {
        this.produtos = response['produtos'];
        console.log((this.produtos));
      },
      (erros) => {
        console.log(erros);
      },
      () => {
        this.getProvincias();
      }
    );
  }





  protected mostrarAlert(){

    if(this.user['user']['estado'] == 0){
      const alert = this.alertController.create({
        'title': 'Mensagem',
        'message': 'A sua conta ainda nao está activa. \n Aguarde até que a sua conta seja activada',
        buttons: ['ok']
      });

       alert.present();
    }else{
      const alert = this.alertController.create({
        'title': 'Mensagem',
        'message': 'Tem a certeza que deseja desactivar a conta?',
        buttons: [{
          text: 'Não',
          handler: value => {
            console.log(value);
          }
        },
          {
            text: 'SIM',
            handler: value => {
              console.log(value);
            }
          }
        ]
      });

       alert.present();
    }
  }

  voltar(){
    this.navCtrl.pop();
  }


}
