import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistarProdutosPage } from './registar-produtos';

@NgModule({
  declarations: [
    RegistarProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistarProdutosPage),
  ],
})
export class RegistarProdutosPageModule {}
