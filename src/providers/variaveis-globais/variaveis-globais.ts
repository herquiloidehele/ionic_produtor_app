import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the VariaveisGlobaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VariaveisGlobaisProvider {

  private tipoUser;


  constructor(public http: HttpClient) {

  }


  public getTipoUser(): Observable<String>{
    return this.tipoUser;
  }

  public setTipoUser(tipoUser: String): Observable<String>{
     return this.tipoUser = tipoUser;
  }


}
