import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router'; // Add this import


@Component({
  selector: 'app-home',
  standalone: true, // Ensure this is a standalone component
  imports: [CommonModule, RouterLink], // Add RouterLink here
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: any[] = [];
  categories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });

    this.productService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}