import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicacoesPage } from './publicacoes';
import {HideHeaderDirective} from "../../directives/hide-header/hide-header";

@NgModule({
  declarations: [
    PublicacoesPage
  ],
  imports: [
    IonicPageModule.forChild(PublicacoesPage)
  ],
})
export class PublicacoesPageModule {}
