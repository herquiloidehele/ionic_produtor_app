import { NgModule } from '@angular/core';
import { CategoriaProdutosComponent } from './categoria-produtos/categoria-produtos';
import { ProdutosComponent } from './produtos/produtos';
import { MercadosComponent } from './mercados/mercados';
import { ProdutoresComponent } from './produtores/produtores';
@NgModule({
	declarations: [CategoriaProdutosComponent,
    ProdutosComponent,
    MercadosComponent,
    MercadosComponent,
    ProdutoresComponent],
	imports: [],
	exports: [CategoriaProdutosComponent,
    ProdutosComponent,
    MercadosComponent,
    MercadosComponent,
    ProdutoresComponent]
})
export class ComponentsModule {}
