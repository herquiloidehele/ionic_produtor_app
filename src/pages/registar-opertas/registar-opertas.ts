import {ChangeDetectorRef, Component} from '@angular/core';
import {
  ModalController,
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  LoadingController, AlertController, Platform, ToastController
} from 'ionic-angular';
import {ProdutosProvider} from "../../providers/produtos/produtos";
import {UnidadeMedidaProvider} from "../../providers/unidade-medida/unidade-medida";
import {PreviewPublicacaoPage} from "../preview-publicacao/preview-publicacao";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {Storage} from "@ionic/storage";
import {WebView} from "@ionic-native/ionic-webview/ngx";
import { File } from "@ionic-native/file/ngx";
import {PaginaPrincipalPage} from "../pagina-principal/pagina-principal";
import {OfertasProvider} from "../../providers/ofertas/ofertas";
import {ProdutoSelectPage} from "../produto-select/produto-select";


const IMAGE_STORAGE_KEY = 'imagens_produtos';

@IonicPage()
@Component({
  selector: 'page-registar-opertas',
  templateUrl: 'registar-opertas.html',
})
export class RegistarOpertasPage{

  protected produtos = [];
  protected unidadesMedida = [];
  protected formGroup: FormGroup;
  protected imagens = [];
  protected user: any;

  protected unidadeMedidas = {};

  protected publicacao = {
    designacao: '',
    descricao: null,
    preco: null,
    quantidade: null,
    unidades_medidas_id: '',
    produtos_id: '',
    distritos_id: null,
    imagens: [],
    produtores_id: '',
    is_preco_unidade: false
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider,
    public modalCtr: ModalController,
    public medidasProvider: UnidadeMedidaProvider,
    public actionSheeController: ActionSheetController,
    public cameraProvider: Camera,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public storageCntroller: Storage,
    public platform: Platform,
    public file: File,
    public webviewProvider: WebView,
    public toastController: ToastController,
    public ref: ChangeDetectorRef,
    public ofertasProvider: OfertasProvider) {
    this.getUnidadesMedidas();
    this.initializeValidator();
    this.getUser();

    this.imagens = [
      // "assets/imgs/logo.png",
      // "assets/imgs/farmer.jpeg",
    ];
  }

  ionViewDidLoad(){
    this.getAllProdutos();
  }


  change(unidade){
    this.unidadeMedidas = unidade;
    console.log(unidade);
  }

  protected getAllProdutos(){

    this.storageCntroller.get('user').then((user) => {
      this.produtosProvider.getAllProdutos(user.produtos_produzidos).subscribe(
        (response) => {
          this.produtos = response['produtos'];
          // console.log((this.produtos));
        },
        (erros) => {
          console.log(erros);
        }
      );
    }).catch((error) => {
      console.log("Falha ao pegar os dados");
    });
  }

  protected getUser(){
    this.storageCntroller.get('user').then((user) => {
      this.user = user;
      this.publicacao.distritos_id = this.user.distrito;
      this.publicacao.produtores_id = this.user.id;
      this.getAllProdutos();
    }).catch((error) => {
      console.log(error);
    })
  }

  protected getUnidadesMedidas(){
    if(this.unidadesMedida.length == 0){
       this.medidasProvider.getAll().subscribe(
        (response) => {
          this.unidadesMedida = response['unidades_medidas'];
        }
      );
    }
  }

  protected openProdutosSelect(){
    let modalControler = this.modalCtr.create(ProdutoSelectPage, {produtos: this.produtos, produtos_produzidos: this.user.produtos_produzidos.length});
    modalControler.present();

    modalControler.onDidDismiss((produto) => {
      this.publicacao.produtos_id = produto;
    });
  }

  protected publicar(){
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
    this.storageCntroller.get('user').then((user) => {

      const produtoFilter = user.produtos_produzidos.filter((produzidos) => {
        return produzidos['id'] == produto['id'];
      });

      if(produtoFilter.length == 0){
        user.produtos_produzidos.push(produto);
        this.storageCntroller.set('user', user).then((response)=>{
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



  protected preview(){
    console.log(this.publicacao);
    this.navCtrl.push(PreviewPublicacaoPage, {publicacao: this.publicacao});
  }

  protected initializeValidator(){
    this.formGroup = new FormGroup({
      titulo: new FormControl('', [Validators.minLength(0), Validators.maxLength(25)]),
      preco: new FormControl('', [Validators.pattern('\\d+'), Validators.required]),
      quantidade: new FormControl('', [Validators.pattern('\\d+'), Validators.required]),
      unidade_medida_id: new FormControl('', [Validators.required]),
      produto_id: new FormControl('', [Validators.minLength(3)]),
      descricao: new FormControl('', [Validators.minLength(5), Validators.required]),
      is_preco_unidade: new FormControl('', []),
    });
  }

  protected presentToast(message){
    const toast = this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  protected presentAltert(title, message){
    const alert = this.alertController.create({
      title: title,
      message: message,
      buttons: ['ok']
    });

    alert.present();
  }

  protected showUploadOptions(){
    const uploadOpetions = this.actionSheeController.create({
      title: 'Escolha Uma opcao',
      buttons: [
        {
          text: 'Usar a Camera',
          icon: 'camera',
          handler: () => {
            this.tirarFoto();
          }
        },
        {
          text: 'Escolher na Galeria',
          icon: 'image',
          handler: () => {
            this.selectOnGalery();
          }
        },
        {
          text: 'cancel',
          role: 'cancel'
        }
      ]
    });

    uploadOpetions.present();
  }

  protected tirarFoto(){

    const OPTIONS: CameraOptions = {
      quality: 100,
      sourceType: this.cameraProvider.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.cameraProvider.DestinationType.FILE_URI
    };

    let loading = this.loadingController.create({content: 'Agurarde...'});

    loading.present();

    this.cameraProvider.getPicture(OPTIONS)
      .then((imagePath) => {

      console.log({getPicture: imagePath});

      let currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      let currentPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      console.log({getPicture: currentPath});
      this.copyFileToLocalDir(currentPath, currentName, this.file.dataDirectory, this.createNameFile());

      loading.dismiss();
    }).catch((error) => {
      console.log({tirarFotoError :error});
      loading.dismiss();
    });


  }

  protected selectOnGalery(){
    const OPTIONS: CameraOptions = {
      quality: 70,
      sourceType: this.cameraProvider.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.cameraProvider.DestinationType.DATA_URL
    };

    let loading = this.loadingController.create({content: 'Agurarde...'});

    loading.present();

    this.cameraProvider.getPicture(OPTIONS).then((imagePath) => {

        console.log({getPicture: imagePath});
        const img = 'data:image/jpeg;base64,' + imagePath;

        this.imagens.push(img);


        loading.dismiss();
      }).catch((error) => {
      console.log({tirarFotoError :error});
      loading.dismiss();
    });

  }

  protected deleteImage(imagem){
    const alert = this.alertController.create({
      title: "Remover Imagem",
      buttons: [
        {
          text: "NÃo",
        },
        {
          text: "SIM",
          handler: () => {
            this.imagens.splice(this.imagens.indexOf(imagem), 1);
          }
        }
      ]
    });

    alert.present();
  }

  private copyFileToLocalDir(namePath, currentName, newFilePah, newFileName){
    this.file.copyFile(namePath, currentName, newFileName, newFilePah).then(
      (response) => {
        console.log("Foto Carregada");
        this.updateStorageImags(newFileName);
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  public updateStorageImags(imagem){
    this.storageCntroller.get(IMAGE_STORAGE_KEY).then(async (imagePath) => {

      if(!imagePath){
        let imagePath = [imagem];
        let novaImagem = await this.storageCntroller.set(IMAGE_STORAGE_KEY, imagePath);
        console.log({novaImagem});
      }else {
        imagePath.push(imagem);
        let imagemAdicionada = await this.storageCntroller.set(IMAGE_STORAGE_KEY, imagePath);
        console.log({imagemAdicionada});
      }

      let filePath = this.file.dataDirectory + imagem;
      let resPath = this.pathForImage(imagem);


      let novaImagemObject = {
        nome: imagem,
        caminho: resPath,
        caminhoFicheiro: filePath
      };

      this.imagens = [novaImagemObject, ...this.imagens];
      this.ref.detectChanges();


    });
  }

  protected pathForImage(imagem){
    if(imagem == null){
      return '';
    }else{
      return this.webviewProvider.convertFileSrc(imagem);
    }
  }

  private createNameFile(): String{
    let d = new Date(),  n = d.getTime();
    return  (n + '.jpg');
  }

  public deleteStorageImages(imagem, posicao){

    this.imagens.splice(posicao, 1);

    this.storageCntroller.get(IMAGE_STORAGE_KEY).then(async (response) => {
      let filter = response.filter((currentImage) => {currentImage != imagem.nome});

      let imagens = await this.storageCntroller.set(IMAGE_STORAGE_KEY, filter);
      console.log({imagensRestantes: imagens});

      let correctPath = imagem.filePath.substr(0, imagem.filePath.indexOf('/') + 1)

      this.file.removeFile(correctPath, imagem.nome).then((response) => {
        this.presentToast("Imagem Removida com sucesso");
      }).catch((erro) => {
        this.presentAltert("Erro","Erro ao Remover Imagem");
      });

    });

  }

}
