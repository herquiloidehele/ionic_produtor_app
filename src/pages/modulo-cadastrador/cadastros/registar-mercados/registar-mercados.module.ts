import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RegistarMercadosPage} from "./registar-mercados";

@NgModule({
  declarations: [
    RegistarMercadosPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistarMercadosPage),
  ],
})
export class RegistarMercadosPageModule {}
