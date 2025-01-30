import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  products: any[] = [];
  category: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    if (this.category) {
      this.productService.getProductsByCategory(this.category).subscribe((data) => {
        this.products = data;
      });
    }
  }
}