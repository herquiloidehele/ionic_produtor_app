import { NgModule } from '@angular/core';
import { CategoriaProdutosComponent } from './categoria-produtos/categoria-produtos';
import { ProdutosComponent } from './produtos/produtos';
import { MercadosComponent } from './mercados/mercados';
import { ProdutoresComponent } from './produtores/produtores';
import { RevendedoresComponent } from './revendedores/revendedores';
import { DialogPrecoComponent } from './dialog-preco/dialog-preco';
import { ProdutosListComponent } from './produtos-list/produtos-list';
@NgModule({
	declarations: [CategoriaProdutosComponent,
    ProdutosComponent,
    MercadosComponent,
    MercadosComponent,
    ProdutoresComponent,
    RevendedoresComponent,
    DialogPrecoComponent,
    ProdutosListComponent],
	imports: [],
	exports: [CategoriaProdutosComponent,
    ProdutosComponent,
    MercadosComponent,
    MercadosComponent,
    ProdutoresComponent,
    RevendedoresComponent,
    DialogPrecoComponent,
    ProdutosListComponent]
})
export class ComponentsModule {}
