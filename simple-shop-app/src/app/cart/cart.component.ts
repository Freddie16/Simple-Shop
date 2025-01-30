import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // ✅ Added CommonModule & CurrencyPipe
import { CartService } from '../services/cart.service';

declare var paypal: any; // Declare PayPal SDK

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // ✅ Ensure CommonModule is imported
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CurrencyPipe], // ✅ Provide CurrencyPipe
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });

    this.cartService.getCartTotal().subscribe((total) => {
      this.cartTotal = total;
    });
  }

  // ✅ Fix: Implement `removeFromCart()`
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  // Checkout with PayPal
  checkout() {
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
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
            alert('Payment completed successfully!');
            console.log('Payment details:', details);
            this.cartService.clearCart();
          });
        },
        onError: (err: any) => {
          console.error('Payment error:', err);
          alert('Payment failed. Please try again.');
        },
      })
      .render('#paypal-button-container');
  }
}
