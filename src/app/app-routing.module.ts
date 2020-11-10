import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path : 'products', component: ProductComponent},
  {path : 'create-product', component : CreateProductComponent},
  {path : 'update-product/:id', component : UpdateProductComponent},
  {path : 'view-product/:id', component: ProductDetailsComponent},
  {path: '', redirectTo: 'products', pathMatch : 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
