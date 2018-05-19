import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VariaveisGlobaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VariaveisGlobaisProvider {

  private tipoUser: String;


  constructor(public http: HttpClient) {

  }


  public getTipoUser(): String{
    return this.tipoUser;
  }

  public setTipoUser(tipoUser: String){
      this.tipoUser = tipoUser;
  }


}
