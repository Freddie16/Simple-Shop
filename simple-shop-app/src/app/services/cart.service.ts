import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private cartTotal = new BehaviorSubject<number>(0);
  private cartItemsSubject = new BehaviorSubject<any[]>([]); // ✅ Fix: Observable cartItems

  constructor() {}

  // ✅ Fix: Return an observable instead of direct array access
  getCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  getCartCount(): Observable<number> {
    return this.cartCount.asObservable();
  }

  getCartTotal(): Observable<number> {
    return this.cartTotal.asObservable();
  }

  addToCart(product: any): void {
    this.cartItems.push(product);
    this.updateCart();
  }

  removeFromCart(product: any): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    this.updateCart();
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  private updateCart(): void {
    this.cartItemsSubject.next(this.cartItems); // ✅ Fix: Notify subscribers
    this.cartCount.next(this.cartItems.length);
    this.cartTotal.next(this.calculateTotal());
  }

  private calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
