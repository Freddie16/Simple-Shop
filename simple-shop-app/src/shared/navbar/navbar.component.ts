import { Component, OnInit } from '@angular/core';
import { CartService } from '../../app/services/cart.service';
import { ProductService } from '../../app/services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // Add FormsModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  searchQuery: string = ''; // Add searchQuery property

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Subscribe to the cart count observable
    this.cartService.getCartCount().subscribe((count) => {
      this.cartCount = count;
    });
  }

  // Add search functionality
  search() {
    if (this.searchQuery) {
      // Implement search logic here (e.g., navigate to a search results page)
      console.log('Searching for:', this.searchQuery);
    }
  }
}