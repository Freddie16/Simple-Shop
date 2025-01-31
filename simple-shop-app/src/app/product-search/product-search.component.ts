import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, RouterLink], // Add CommonModule and RouterLink
  templateUrl: './product-search.component.html',
})
export class ProductSearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Get the search query from the URL
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];
      if (this.searchQuery) {
        this.searchProducts(this.searchQuery);
      }
    });
  }

  // Search for products
  searchProducts(query: string) {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.searchResults = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
}