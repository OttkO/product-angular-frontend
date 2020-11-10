import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
    private router: Router)  { }

  ngOnInit(): void {
  }

  saveProduct() {
    this.productService.createPoduct(this.product).subscribe(res => {
      console.log(res);
      this.goToProductList();
    },
    error => console.log(error));
  }

  goToProductList() {
    	this.router.navigate(['/products']);
  }

  onSubmit(): void {
    this.saveProduct();
  }

}
