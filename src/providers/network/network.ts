import { Injectable } from '@angular/core';
import {Network} from "@ionic-native/network";
import {Events} from "ionic-angular";


export enum ConnectionStatusEnum{
  Online,
  Offline
}


/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {


  public networkStatus;


  constructor(public network: Network, public eventCtl: Events) {

    this.networkStatus = ConnectionStatusEnum.Online;

  }

  public initializeNetworkEvents(): void{
    this.network.onDisconnect().subscribe(() => {
        this.eventCtl.publish('network:online');
        this.networkStatus = ConnectionStatusEnum.Online;
    });

    this.network.onConnect().subscribe(() => {
      this.eventCtl.publish('network:offline');
      this.networkStatus = ConnectionStatusEnum.Offline;
    });

    this.network.onchange().subscribe(() => {
      alert(this.networkStatus);
    });

  }



}
