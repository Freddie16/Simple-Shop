import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductSearchComponent } from './product-search/product-search.component'; // Import ProductSearchComponent


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'product/:id', component: ProductDetailsComponent }, // Product details route
  { path: 'categories', component: CategoriesComponent }, // Categories route
  { path: 'categories/:category', component: CategoriesComponent }, // Products by category route
  { path: 'cart', component: CartComponent }, // Cart route
  { path: 'checkout', component: CheckoutComponent }, // Checkout route
  { path: 'search', component: ProductSearchComponent }, // Search route

];