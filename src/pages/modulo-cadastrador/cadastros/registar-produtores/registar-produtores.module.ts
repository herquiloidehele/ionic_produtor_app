import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistarProdutoresPage } from './registar-produtores';

@NgModule({
  declarations: [
    RegistarProdutoresPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistarProdutoresPage),
  ],
})
export class RegistarProdutoresPageModule {}
