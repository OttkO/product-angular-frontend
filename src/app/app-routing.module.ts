import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path : 'products', component: ProductComponent},
  {path : 'create-product', component : CreateProductComponent},
  {path: '', redirectTo: 'products', pathMatch : 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
