import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './mock-products';
import { Product } from './product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = of(PRODUCTS);

  getProducts(): Observable<Product[]> {

    console.log("Fetched list of Products . . .");
    return this.products;
  }

  getDetailProduct(id: string) : Observable<Product> {

    return this.products.pipe(map(products => products.filter(product => product.id === id)[0]))

  }
}
