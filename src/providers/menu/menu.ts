import { Injectable } from '@angular/core';

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuProvider {

  private showMenu: boolean = false;
  private tipoUser: string = "";


  constructor() {
  }



  public setTipoUser(tipoUser: string){
    this.tipoUser = tipoUser;
  }

  public getTipoUser(){
    return this.tipoUser;
  }

  public setShowMenu(showMenu: boolean){
    this.showMenu = showMenu;
  }

  public getShowMenu(){
    return this.showMenu;
  }




}
