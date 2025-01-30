import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private cartTotal = new BehaviorSubject<number>(0);

  constructor() {}

  // Add a product to the cart
  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartCount.next(this.cartItems.length);
    this.cartTotal.next(this.calculateTotal());
  }

  // Get the current cart items
  getCartItems() {
    return this.cartItems;
  }

  // Get the cart count as an observable
  getCartCount() {
    return this.cartCount.asObservable();
  }

  // Get the cart total as an observable
  getCartTotal() {
    return this.cartTotal.asObservable();
  }

  // Remove an item from the cart
  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter((i) => i.id !== item.id); // Remove the item
    this.cartCount.next(this.cartItems.length); // Update cart count
    this.cartTotal.next(this.calculateTotal()); // Update cart total
  }

  // Clear the cart
  clearCart() {
    this.cartItems = [];
    this.cartCount.next(0);
    this.cartTotal.next(0);
  }

  // Calculate the total amount of the cart
  private calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}