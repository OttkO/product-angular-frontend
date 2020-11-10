import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/v1/products";
  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  createPoduct(product : Product): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }
  
  getProductById(id : number) : Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProductById(id : number) : Observable<Object> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }


}
