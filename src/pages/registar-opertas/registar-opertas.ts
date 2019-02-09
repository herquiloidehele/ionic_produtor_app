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
import {ProdutosListPage} from "../produtos-list/produtos-list";
import {UnidadeMedidaProvider} from "../../providers/unidade-medida/unidade-medida";
import {PublicacoesPage} from "../publicacoes/publicacoes";
import {PreviewPublicacaoPage} from "../preview-publicacao/preview-publicacao";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Camera, CameraOptions, PictureSourceType} from "@ionic-native/camera/ngx";
import {Storage} from "@ionic/storage";
import {WebView} from "@ionic-native/ionic-webview/ngx";
import { File } from "@ionic-native/file/ngx";


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

  protected publicacao = {
    designacao: null,
    descricao: null,
    preco: null,
    quantidade: null,
    unidades_medidas_id: null,
    produtos_id: '',
    distritos_id: null,


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
    public ref: ChangeDetectorRef
  ) {
    this.getAllProdutos();
    this.getUnidadesMedidas();
    this.initializeValidator();
  }


  protected getAllProdutos(){
    this.produtosProvider.getAll().subscribe(
      response => {
        this.produtos = response['produtos'];
      }
    );
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
    let modalControler = this.modalCtr.create(ProdutosListPage, {produtos: this.produtos});
    modalControler.present();

    modalControler.onDidDismiss((produto) => {
      this.publicacao.produtos_id = produto;
    });
  }

  protected publicar(){
    console.log(this.publicacao);
    this.navCtrl.setRoot(PublicacoesPage);

  }

  protected preview(){
    console.log(this.publicacao);
    this.navCtrl.push(PreviewPublicacaoPage, {publicacao: this.publicacao});
  }

  protected initializeValidator(){
    this.formGroup = new FormGroup({
      titulo: new FormControl('', [Validators.minLength(5), Validators.maxLength(25)]),
      preco: new FormControl('', [Validators.pattern('\\d+'), Validators.required]),
      quantidade: new FormControl('', [Validators.pattern('\\d+'), Validators.required]),
      unidade_medida_id: new FormControl('', [Validators.required]),
      produto_id: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.minLength(0), Validators.maxLength(150)]),
    });
  }

  protected showUploadOptions(){
    const uploadOpetions = this.actionSheeController.create({
      title: 'Escolha Uma opcao',
      buttons: [
        {
          text: 'Usar a Camera',
          // icon: 'camera',
          handler: () => {
            this.tirarFoto(this.cameraProvider.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Escolher na Galeria',
          // icon: 'image',
          handler: () => {
            this.tirarFoto(this.cameraProvider.PictureSourceType.PHOTOLIBRARY);
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

  protected tirarFoto(photoSource: PictureSourceType){

    const OPTIONS: CameraOptions = {
      quality: 70,
      sourceType: photoSource,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    let loading = this.loadingController.create({content: 'Agurarde...'});

    loading.present();

    this.cameraProvider.getPicture(OPTIONS).then((imagePath) => {

      console.log({getPicture: imagePath});
      let currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      let currentPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(currentPath, currentName, this.file.dataDirectory, this.createNameFile());

        loading.dismiss();
    }).catch((error) => {
      console.log({tirarFoto :error});
      loading.dismiss();
    });


  }

  private copyFileToLocalDir(namePath, currentName, newFilePah, newFileName){
    this.file.copyFile(namePath, currentName, newFileName, newFilePah).then(
      (response) => {
        console.log("Foto Carregada");
        this.updateStorageImags(newFileName);
      },
      (error) => {
        console.log(error);
      }
    );
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
      let resPath = this.getPathForImage(imagem);


      let novaImagemObject = {
        nome: imagem,
        caminho: resPath,
        caminhoFicheiro: filePath
      };

      this.imagens = [novaImagemObject, ...this.imagens];
      this.ref.detectChanges();


    });
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

  protected getPathForImage(imagem){
    if(imagem == null){
      return '';
    }else{
      let convertedImg = this.webviewProvider.convertFileSrc(imagem);
      return convertedImg;
    }
  }

  private presentToast(message){
    const toast = this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  private presentAltert(title, message){
    const alert = this.alertController.create({
      title: title,
      message: message,
      buttons: ['ok']
    });

    alert.present();
  }

  private createNameFile(): String{
    var d = new Date(),  n = d.getTime(), newFileName = n + '.jpg';
    return newFileName;
  }

}
