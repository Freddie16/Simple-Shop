import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

declare var paypal: any; // Declare PayPal SDK

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // ✅ Ensure CommonModule is imported
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    
    this.cartService.getCartTotal().subscribe((total) => {
      this.cartTotal = total;
      console.log('💰 Cart Total:', this.cartTotal); // Debugging
    });
  }

  // ✅ Remove an item from the cart
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  // ✅ Checkout with PayPal
  checkout() {
    if (this.cartTotal <= 0) {
      alert('Cart is empty! Add items before checkout.');
      return;
    }

    let retries = 0;
    const interval = setInterval(() => {
      if (typeof paypal !== 'undefined') {
        clearInterval(interval);
        console.log('✅ PayPal SDK Loaded!');
        this.loadPayPalButton();
      } else if (retries > 10) {
        clearInterval(interval);
        console.error('❌ PayPal SDK did not load!');
        alert('Error loading PayPal. Refresh and try again.');
      }
      retries++;
    }, 500);
  }

  // ✅ Load PayPal Button
  loadPayPalButton() {
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          console.log('🛒 Creating order with total:', this.cartTotal);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.cartTotal.toFixed(2),
                  currency_code: 'USD',
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert('✅ Payment successful!');
            console.log('🎉 Payment details:', details);
            this.cartService.clearCart();
          });
        },
        onError: (err: any) => {
          console.error('❌ Payment failed:', err);
          alert('❌ Payment failed. Please try again.');
        },
      })
      .render('#paypal-button-container');
  }
}
