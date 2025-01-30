import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service'; // Import CartService
import { CommonModule } from '@angular/common'; // Add this import


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule], // Add CommonModule if needed
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(+id).subscribe((data: any) => {
        this.product = data;
      });
    }
  }

  // Add the product to the cart
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to cart!'); // Optional: Show a confirmation message
  }
}