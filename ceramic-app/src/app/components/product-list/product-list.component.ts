import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product!: Observable<ProductModel[]>;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
      this.product = this.productService.getAllProduct();
  }

}
