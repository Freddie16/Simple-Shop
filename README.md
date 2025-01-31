Simple Shop - Angular E-Commerce App
Welcome to Simple Shop, a fully functional e-commerce web application built with Angular. This app allows users to browse products, add them to a cart, and complete purchases using PayPal. Below is a detailed guide to help you understand, set up, and run the app.

Table of Contents
Features

Technologies Used

Setup Instructions

Running the App

Folder Structure

API Integration

PayPal Integration

Testing

Deployment

Contributing

License

Features
Home Page: Displays featured products and categories.

Product Search: Search for products by name.

Product Details: View detailed information about a product.

Categories: Browse products by category.

Cart: Add, remove, and manage items in the cart.

Checkout: Complete purchases using PayPal.

Responsive Design: Works seamlessly on desktop, tablet, and mobile devices.

Technologies Used
Frontend: Angular (v17+)

Styling: Bootstrap, CSS

State Management: RxJS (BehaviorSubject)

Payment Gateway: PayPal

API: FAKE Store API (https://fakestoreapi.com)

Routing: Angular Router

Testing: Jasmine, Karma (optional)

Setup Instructions
Prerequisites
Node.js: Ensure you have Node.js installed (v16+ recommended).

Angular CLI: Install Angular CLI globally:

bash
Copy
npm install -g @angular/cli
Steps
Clone the Repository:

bash
Copy
git clone git@github.com:Freddie16/Simple-Shop.git
cd simple-shop
Install Dependencies:

bash
Copy
npm install
Set Up Environment Variables:

Create a .env file in the root directory:

Copy
PAYPAL_CLIENT_ID=your_paypal_client_id

Run the App:

bash
Copy
ng serve
The app will be available at http://localhost:4200.

Running the App
Home Page:

Browse featured products and categories.

Click on a product to view details.

Cart:

Add products to the cart.

Remove products from the cart.

Proceed to checkout.

Checkout:

Complete the purchase using PayPal.


API Integration
The app uses the FAKE Store API to fetch product and category data. Below are the key API endpoints:

Get All Products: https://fakestoreapi.com/products

Get Product by ID: https://fakestoreapi.com/products/{id}

Get All Categories: https://fakestoreapi.com/products/categories

Get Products by Category: https://fakestoreapi.com/products/category/{category}

PayPal Integration
The app integrates PayPal for payment processing. Here’s how it works:

Client-Side:

The PayPal SDK is loaded in index.html.

The CheckoutComponent renders the PayPal button and handles payment approval.



Testing
To run unit tests:

bash
Copy
ng test
To run end-to-end tests:

bash
Copy
ng e2e
Deployment
Steps to Deploy
Build the App:


License
This project is licensed under the MIT License. See the LICENSE file for details.

Support
If you encounter any issues or have questions, feel free to open an issue on GitHub or contact the maintainers.

Happy Shopping! 🛒
