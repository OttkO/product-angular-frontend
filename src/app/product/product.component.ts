import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];
  constructor(private productService: ProductService,
              private router: Router) { }
 
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  updateProduct(id:number) {
    this.router.navigate(['update-product', id])
  }

}
