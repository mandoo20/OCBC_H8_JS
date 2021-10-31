import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product_id: string;

  products: Product[] = [];
  pDetails!:Product;

  constructor(private actRoute: ActivatedRoute,private productService: ProductService) {
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {

    this.getOneProduct(this.product_id);
  }

  getOneProduct(id :string) {
    this.productService.getDetailProduct(id).subscribe(products => this.pDetails = products)

  }
}
