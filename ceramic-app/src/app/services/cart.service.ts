import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartOpen = new EventEmitter<boolean>();

  openCart() {
    this.cartOpen.emit(true);
  }

  closeCart() {
    this.cartOpen.emit(false);
  }

  constructor() { }
}
