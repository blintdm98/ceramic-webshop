import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Observable<ProductModel[]>;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.products = this.productService.getAllProduct();
  }

  goToProduct(productId: string | undefined){
    this.router.navigate(['product', productId]);
  }

}
