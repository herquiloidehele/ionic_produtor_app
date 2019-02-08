import { Injectable } from '@angular/core';
import {environment as ENV} from "../../environments/environment";

@Injectable()
export class UrlapiProvider {


  protected url = ENV.URL_API;
  private urlSimple = ENV.SIMPLE_URL;

  constructor() {
  }

  public getURL(): String{
    return this.url;
  }

  public getSimpleURL(): String{
    return this.urlSimple;
  }


}
