import { Injectable } from '@angular/core';

/*
  Generated class for the UrlapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlapiProvider {


  private urls = [
                  {nome: 'Local', url: 'http://127.0.0.1:8000/api/', status: true},
                  {nome: 'Centos Server', url: 'http://34.217.126.220/api/', status: false},
                  {nome: 'Ubuntu Server', url: 'http://54.218.58.191/api/', status: true}];
  constructor() {
  }

  public getURLs(){
    return this.urls;
  }

  public selectUrl(url: String){
    localStorage.setItem('server', url);
    this.selectedURL = url;
  }

  public getUrl(){
    let server = localStorage.getItem('server');
    return server;
  }

}
