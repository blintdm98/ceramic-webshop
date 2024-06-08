import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartOpen = new EventEmitter<boolean>();

  openCart() {
    console.log(this.cartOpen)
    this.cartOpen.emit(true);
  }

  closeCart() {
    console.log(this.cartOpen.emit(false));
    this.cartOpen.emit(false);
  }

  constructor() { }
}
