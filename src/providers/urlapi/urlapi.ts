import { Injectable } from '@angular/core';

/*
  Generated class for the UrlapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlapiProvider {


  private urls = ['http://127.0.0.1:8000/api/', 'http://34.217.126.220/api/'];
  private selectedURL;
  constructor() {
    this.selectedURL = this.urls[1];
  }


  // public getUrl(){
  //
  //   let resultado =  await this.httpClient.get(this.urls[0] + 'api-test').toPromise()
  //       .then((sucesso) => {
  //         return sucesso;
  //       })
  //       .catch((erro) =>{
  //       return erro;
  //     });
  //
  //
  //     if(resultado.response){
  //       this.selectedURL = this.urls[0];
  //       return this.selectedURL;
  //     } else{
  //       this.selectedURL = this.urls[1];
  //       return this.selectedURL;
  //     }
  //
  // }

  public getUrl(){
    return this.selectedURL;
  }

}
