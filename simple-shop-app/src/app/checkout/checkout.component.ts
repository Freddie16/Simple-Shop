import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { CartService } from '../services/cart.service';

declare var paypal: any; // Declare PayPal SDK globally

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule], // ✅ Include CommonModule for the currency pipe
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartTotal().subscribe((total) => {
      this.cartTotal = total; // ✅ Get actual cart total
      this.waitForPayPalSDK(); // ✅ Wait for PayPal SDK to load
    });
  }

  waitForPayPalSDK() {
    const interval = setInterval(() => {
      if (typeof paypal !== 'undefined') {
        clearInterval(interval);
        this.loadPayPalButton();
      }
    }, 500);
  }

  loadPayPalButton() {
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
            alert('✅ Payment completed successfully!');
            console.log('Payment details:', details);
            this.cartService.clearCart();
          });
        },
        onError: (err: any) => {
          console.error('❌ Payment error:', err);
          alert('❌ Payment failed. Please try again.');
        },
      })
      .render('#paypal-button-container');
  }
}
