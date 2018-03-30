import { NgModule } from '@angular/core';
import { CategoriaProdutosComponent } from './categoria-produtos/categoria-produtos';
import { ProdutosComponent } from './produtos/produtos';
import { MercadosComponent } from './mercados/mercados';
@NgModule({
	declarations: [CategoriaProdutosComponent,
    ProdutosComponent,
    MercadosComponent,
    MercadosComponent],
	imports: [],
	exports: [CategoriaProdutosComponent,
    ProdutosComponent,
    MercadosComponent,
    MercadosComponent]
})
export class ComponentsModule {}
