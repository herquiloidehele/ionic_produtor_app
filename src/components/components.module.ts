import { NgModule } from '@angular/core';
import { CategoriaProdutosComponent } from './categoria-produtos/categoria-produtos';
import { ProdutosComponent } from './produtos/produtos';
import { MercadosComponent } from './mercados/mercados';
import { ProdutoresComponent } from './produtores/produtores';
import { RevendedoresComponent } from './revendedores/revendedores';
@NgModule({
	declarations: [CategoriaProdutosComponent,
    ProdutosComponent,
    MercadosComponent,
    MercadosComponent,
    ProdutoresComponent,
    RevendedoresComponent],
	imports: [],
	exports: [CategoriaProdutosComponent,
    ProdutosComponent,
    MercadosComponent,
    MercadosComponent,
    ProdutoresComponent,
    RevendedoresComponent]
})
export class ComponentsModule {}
