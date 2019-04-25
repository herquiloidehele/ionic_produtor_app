import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {ProcurasProvider} from "../../providers/procuras/procuras";
import {UrlapiProvider} from "../../providers/urlapi/urlapi";
import {DetalhesProcuraPage} from "../detalhes-procura/detalhes-procura";
import {Observable} from "rxjs";


@IonicPage()
@Component({
  selector: 'page-procuras',
  templateUrl: 'procuras.html',
})
export class ProcurasPage {

  protected procuras = [];
  protected loader = true;


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
      },
      () => {
        this.loader = false;
      }
    );
  }


  public goDetalhesProcura(procura){
    console.log(procura);
    this.navCtrl.push(DetalhesProcuraPage, {procura_id: procura.id})
  }



}
