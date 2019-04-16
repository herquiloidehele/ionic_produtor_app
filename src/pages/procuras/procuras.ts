import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {ProcurasProvider} from "../../providers/procuras/procuras";
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {DetalhesProcuraPage} from "../detalhes-procura/detalhes-procura";


@IonicPage()
@Component({
  selector: 'page-procuras',
  templateUrl: 'procuras.html',
})
export class ProcurasPage {

  protected procuras = [];


  constructor(public navCtrl: NavController, public urlApi: UrlapiProvider, public procurasProvider: ProcurasProvider) {
  }

  ionViewDidLoad() {
    this.getProcuras();
  }


  private getProcuras(){
    this.procurasProvider.getAll().subscribe((response) => {
      this.procuras = response['procuras'];
    },
      (error) => {
      console.log(error);
      }
    );
  }


  private goDetalhesProcura(procura){
    this.navCtrl.push(DetalhesProcuraPage, {procura: procura})
  }



}
