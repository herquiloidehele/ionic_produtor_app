import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcurasPage } from './procuras';

@NgModule({
  declarations: [
    ProcurasPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcurasPage),
  ],
})
export class ProcurasPageModule {}
