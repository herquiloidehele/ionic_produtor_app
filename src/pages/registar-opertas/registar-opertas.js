var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController, Platform, ToastController } from 'ionic-angular';
import { ProdutosProvider } from "../../providers/produtos/produtos";
import { UnidadeMedidaProvider } from "../../providers/unidade-medida/unidade-medida";
import { PreviewPublicacaoPage } from "../preview-publicacao/preview-publicacao";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Camera } from "@ionic-native/camera";
import { Storage } from "@ionic/storage";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { File } from "@ionic-native/file/ngx";
import { OfertasProvider } from "../../providers/ofertas/ofertas";
import { ProdutoSelectPage } from "../produto-select/produto-select";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
var IMAGE_STORAGE_KEY = 'imagens_produtos';
var RegistarOpertasPage = /** @class */ (function () {
    function RegistarOpertasPage(navCtrl, navParams, produtosProvider, modalCtr, medidasProvider, actionSheeController, cameraProvider, loadingController, alertController, storageCntroller, platform, file, transfer, urlApi, webviewProvider, toastController, ref, ofertasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtosProvider = produtosProvider;
        this.modalCtr = modalCtr;
        this.medidasProvider = medidasProvider;
        this.actionSheeController = actionSheeController;
        this.cameraProvider = cameraProvider;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.storageCntroller = storageCntroller;
        this.platform = platform;
        this.file = file;
        this.transfer = transfer;
        this.urlApi = urlApi;
        this.webviewProvider = webviewProvider;
        this.toastController = toastController;
        this.ref = ref;
        this.ofertasProvider = ofertasProvider;
        this.produtos = [];
        this.unidadesMedida = [];
        this.imagens = [];
        this.unidadeMedidas = {};
        this.publicacao = {
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
        this.getUnidadesMedidas();
        this.initializeValidator();
        this.getUser();
        if (this.platform.is('cordova')) {
            this.isNativo = true;
        }
        else {
            this.isNativo = false;
        }
    }
    RegistarOpertasPage.prototype.ionViewDidLoad = function () {
        this.getAllProdutos();
    };
    RegistarOpertasPage.prototype.change = function (unidade) {
        this.unidadeMedidas = unidade;
        console.log(unidade);
    };
    RegistarOpertasPage.prototype.getAllProdutos = function () {
        var _this = this;
        this.storageCntroller.get('user').then(function (user) {
            _this.produtosProvider.getAllProdutos(user.produtos_produzidos).subscribe(function (response) {
                _this.produtos = response['produtos'];
                // console.log((this.produtos));
            }, function (erros) {
                console.log(erros);
            });
        }).catch(function (error) {
            console.log("Falha ao pegar os dados");
        });
    };
    RegistarOpertasPage.prototype.getUser = function () {
        var _this = this;
        this.storageCntroller.get('user').then(function (user) {
            _this.user = user;
            _this.publicacao.distritos_id = _this.user.distrito;
            _this.publicacao.produtores_id = _this.user.id;
            _this.getAllProdutos();
        }).catch(function (error) {
            console.log(error);
        });
    };
    RegistarOpertasPage.prototype.getUnidadesMedidas = function () {
        var _this = this;
        if (this.unidadesMedida.length == 0) {
            this.medidasProvider.getAll().subscribe(function (response) {
                _this.unidadesMedida = response['unidades_medidas'];
            });
        }
    };
    RegistarOpertasPage.prototype.openProdutosSelect = function () {
        var _this = this;
        var modalControler = this.modalCtr.create(ProdutoSelectPage, { produtos: this.produtos, produtos_produzidos: this.user.produtos_produzidos.length });
        modalControler.present();
        modalControler.onDidDismiss(function (produto) {
            if (produto != null)
                _this.publicacao.produtos_id = produto;
        });
    };
    RegistarOpertasPage.prototype.publicar = function () {
        var _this = this;
        var novaPublicacao = this.transformPublicacao(this.publicacao);
        console.log({ novaPublicacao: novaPublicacao });
        var loading = this.loadingController.create({ content: 'Publicando' });
        loading.present();
        this.ofertasProvider.salvarOferta(novaPublicacao).subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(response);
                this.actualizarProdutos(this.publicacao.produtos_id);
                // await this.uploadFiles(this.publicacao.produtos_id);
                loading.dismiss();
                this.navCtrl.popToRoot();
                return [2 /*return*/];
            });
        }); }, function (error) {
            loading.dismiss();
            _this.showAlert("Erro ao Publicar", "Ocorreu algum erro ao Submeter \n Verifique a sua Internet");
            console.log(error);
        });
    };
    RegistarOpertasPage.prototype.actualizarProdutos = function (produto) {
        var _this = this;
        console.log(produto);
        this.storageCntroller.get('user').then(function (user) {
            var produtoFilter = user.produtos_produzidos.filter(function (produzidos) {
                return produzidos['id'] == produto['id'];
            });
            if (produtoFilter.length == 0) {
                user.produtos_produzidos.push(produto);
                _this.storageCntroller.set('user', user).then(function (response) {
                    console.log("Produto adicionado");
                });
            }
            else {
                console.log("o produto ja faz parte");
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    RegistarOpertasPage.prototype.transformPublicacao = function (publicacao) {
        return {
            designacao: publicacao.designacao,
            descricao: publicacao.descricao,
            preco: publicacao.preco,
            quantidade: publicacao.quantidade,
            unidades_medidas_id: publicacao.unidades_medidas_id['id'],
            produtos_id: publicacao.produtos_id['id'],
            distritos_id: publicacao.distritos_id['id'],
            produtores_id: publicacao.produtores_id,
            is_preco_unidade: publicacao.is_preco_unidade,
            imagens: this.imagens
        };
    };
    RegistarOpertasPage.prototype.showAlert = function (titulo, mensagem) {
        this.alertController.create({ message: mensagem, title: titulo, buttons: ['ok'] }).present();
    };
    RegistarOpertasPage.prototype.preview = function () {
        console.log(this.publicacao);
        this.publicacao.imagens = this.imagens;
        this.navCtrl.push(PreviewPublicacaoPage, { publicacao: this.publicacao });
    };
    RegistarOpertasPage.prototype.initializeValidator = function () {
        this.formGroup = new FormGroup({
            titulo: new FormControl('', [Validators.minLength(0), Validators.maxLength(25)]),
            preco: new FormControl('', [Validators.pattern('\\d+'), Validators.required]),
            quantidade: new FormControl('', [Validators.pattern('\\d+'), Validators.required]),
            unidade_medida_id: new FormControl('', [Validators.required]),
            produto_id: new FormControl('', [Validators.minLength(3)]),
            descricao: new FormControl('', [Validators.minLength(5), Validators.required]),
            is_preco_unidade: new FormControl('', []),
            profilePic: new FormControl('', []),
        });
    };
    RegistarOpertasPage.prototype.presentToast = function (message) {
        var toast = this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    RegistarOpertasPage.prototype.presentAltert = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            message: message,
            buttons: ['ok']
        });
        alert.present();
    };
    RegistarOpertasPage.prototype.showUploadOptions = function () {
        var _this = this;
        var uploadOpetions = this.actionSheeController.create({
            title: 'Escolha Uma opcao',
            buttons: [
                {
                    text: 'Usar a Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.tirarFoto();
                    }
                },
                {
                    text: 'Escolher na Galeria',
                    icon: 'image',
                    handler: function () {
                        _this.selectOnGalery();
                    }
                },
                {
                    text: 'cancel',
                    role: 'cancel'
                }
            ]
        });
        uploadOpetions.present();
    };
    RegistarOpertasPage.prototype.tirarFoto = function () {
        var _this = this;
        var OPTIONS = {
            quality: 100,
            sourceType: this.cameraProvider.PictureSourceType.CAMERA,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            destinationType: this.cameraProvider.DestinationType.FILE_URI
        };
        var loading = this.loadingController.create({ content: 'Agurarde...' });
        loading.present();
        this.cameraProvider.getPicture(OPTIONS)
            .then(function (imagePath) {
            console.log({ getPicture: imagePath });
            _this.publicacao.imagens.push(imagePath);
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var currentPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            console.log({ getPicture: currentPath });
            _this.copyFileToLocalDir(currentPath, currentName, _this.file.dataDirectory, _this.createNameFile());
            loading.dismiss();
        }).catch(function (error) {
            console.log({ tirarFotoError: error });
            loading.dismiss();
        });
    };
    RegistarOpertasPage.prototype.selectOnGalery = function () {
        var _this = this;
        var OPTIONS = {
            quality: 70,
            sourceType: this.cameraProvider.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            destinationType: this.cameraProvider.DestinationType.DATA_URL
        };
        var loading = this.loadingController.create({ content: 'Agurarde...' });
        loading.present();
        this.cameraProvider.getPicture(OPTIONS).then(function (imagePath) {
            console.log({ getPicture: imagePath });
            var img = 'data:image/jpeg;base64,' + imagePath;
            _this.imagens.push(img);
            loading.dismiss();
        }).catch(function (error) {
            console.log({ tirarFotoError: error });
            loading.dismiss();
        });
    };
    RegistarOpertasPage.prototype.deleteImage = function (imagem) {
        var _this = this;
        var alert = this.alertController.create({
            title: "Remover Imagem",
            buttons: [
                {
                    text: "NÃo",
                },
                {
                    text: "SIM",
                    handler: function () {
                        _this.imagens.splice(_this.imagens.indexOf(imagem), 1);
                    }
                }
            ]
        });
        alert.present();
    };
    RegistarOpertasPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFilePah, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, newFileName, newFilePah).then(function (response) {
            console.log("Foto Carregada");
            _this.updateStorageImags(newFileName);
        }).catch(function (error) {
            console.log(error);
        });
    };
    RegistarOpertasPage.prototype.updateStorageImags = function (imagem) {
        var _this = this;
        this.storageCntroller.get(IMAGE_STORAGE_KEY).then(function (imagePath) { return __awaiter(_this, void 0, void 0, function () {
            var imagePath_1, novaImagem, imagemAdicionada, filePath, resPath, novaImagemObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!imagePath) return [3 /*break*/, 2];
                        imagePath_1 = [imagem];
                        return [4 /*yield*/, this.storageCntroller.set(IMAGE_STORAGE_KEY, imagePath_1)];
                    case 1:
                        novaImagem = _a.sent();
                        console.log({ novaImagem: novaImagem });
                        return [3 /*break*/, 4];
                    case 2:
                        imagePath.push(imagem);
                        return [4 /*yield*/, this.storageCntroller.set(IMAGE_STORAGE_KEY, imagePath)];
                    case 3:
                        imagemAdicionada = _a.sent();
                        console.log({ imagemAdicionada: imagemAdicionada });
                        _a.label = 4;
                    case 4:
                        filePath = this.file.dataDirectory + imagem;
                        resPath = this.pathForImage(imagem);
                        novaImagemObject = {
                            nome: imagem,
                            caminho: resPath,
                            caminhoFicheiro: filePath
                        };
                        this.imagens = [novaImagemObject].concat(this.imagens);
                        this.ref.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    RegistarOpertasPage.prototype.pathForImage = function (imagem) {
        if (imagem == null) {
            return '';
        }
        else {
            return this.webviewProvider.convertFileSrc(imagem);
        }
    };
    RegistarOpertasPage.prototype.createNameFile = function () {
        var d = new Date(), n = d.getTime();
        return (n + '.jpg');
    };
    RegistarOpertasPage.prototype.deleteStorageImages = function (imagem, posicao) {
        var _this = this;
        this.imagens.splice(posicao, 1);
        this.storageCntroller.get(IMAGE_STORAGE_KEY).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var filter, imagens, correctPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = response.filter(function (currentImage) { currentImage != imagem.nome; });
                        return [4 /*yield*/, this.storageCntroller.set(IMAGE_STORAGE_KEY, filter)];
                    case 1:
                        imagens = _a.sent();
                        console.log({ imagensRestantes: imagens });
                        correctPath = imagem.filePath.substr(0, imagem.filePath.indexOf('/') + 1);
                        this.file.removeFile(correctPath, imagem.nome).then(function (response) {
                            _this.presentToast("Imagem Removida com sucesso");
                        }).catch(function (erro) {
                            _this.presentAltert("Erro", "Erro ao Remover Imagem");
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Carregamento de Imagens na web
     */
    RegistarOpertasPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.formGroup.patchValue({ 'profilePic': imageData });
            console.log(imageData);
            _this.imagens.push(imageData);
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    RegistarOpertasPage.prototype.triggerFileInputClick = function () {
        var file = this.fileInput.nativeElement;
        console.log(file);
        file.click();
    };
    RegistarOpertasPage.prototype.uploadFiles = function (publicao_id) {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'img_produto',
            fileName: 'produto_name',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: [{ publicacoes_id: publicao_id }]
        };
        return fileTransfer.upload(this.imagens[0], this.urlApi.getURL() + 'upload-imagens', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            // this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    __decorate([
        ViewChild('fileInput'),
        __metadata("design:type", ElementRef)
    ], RegistarOpertasPage.prototype, "fileInput", void 0);
    RegistarOpertasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registar-opertas',
            templateUrl: 'registar-opertas.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProdutosProvider,
            ModalController,
            UnidadeMedidaProvider,
            ActionSheetController,
            Camera,
            LoadingController,
            AlertController,
            Storage,
            Platform,
            File,
            FileTransfer,
            UrlapiProvider,
            WebView,
            ToastController,
            ChangeDetectorRef,
            OfertasProvider])
    ], RegistarOpertasPage);
    return RegistarOpertasPage;
}());
export { RegistarOpertasPage };
//# sourceMappingURL=registar-opertas.js.map