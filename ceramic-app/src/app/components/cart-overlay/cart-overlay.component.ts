import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-overlay',
  templateUrl: './cart-overlay.component.html',
  styleUrls: ['./cart-overlay.component.css']
})
export class CartOverlayComponent implements OnInit {
  isOpen = false;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
      this.cartService.cartOpen.subscribe(isOpen => {
        this.isOpen = isOpen;
      });
  }

  closeCart() {
    this.cartService.closeCart();
  }

}
