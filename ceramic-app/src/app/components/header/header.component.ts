import { Component, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private cartService: CartService
  ) {}

  openCart(){
    this.cartService.openCart();
  }

}
