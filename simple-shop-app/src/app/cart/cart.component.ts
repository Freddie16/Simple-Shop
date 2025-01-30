import { Component } from '@angular/core';
import { CartService } from '../services/cart.service'; // Import CartService
import { CommonModule } from '@angular/common'; // Add CommonModule if needed

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // Add CommonModule
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems(); // Get cart items
  }
}