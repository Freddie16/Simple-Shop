import { Component, OnInit } from '@angular/core';
import { CartService } from '../../app/services/cart.service';
import { Router } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterLink } from '@angular/router'; // Add this import
import { CommonModule } from '@angular/common'; // Add this import

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule], // Add FormsModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  searchQuery: string = ''; // Add searchQuery property

  constructor(
    private cartService: CartService,
    private router: Router // Inject Router
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
      // Navigate to the ProductSearchComponent with the search query
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }
}