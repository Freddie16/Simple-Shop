import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartCount = new BehaviorSubject<number>(0); // Observable for cart count

  constructor() {}

  // Add a product to the cart
  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartCount.next(this.cartItems.length); // Update cart count
  }

  // Get the current cart items
  getCartItems() {
    return this.cartItems;
  }

  // Get the cart count as an observable
  getCartCount() {
    return this.cartCount.asObservable();
  }
}