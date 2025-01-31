# Simple Shop - Angular E-Commerce App

Welcome to Simple Shop, a fully functional e-commerce web application built with Angular. This application empowers users to browse products, add them to a cart, and seamlessly complete purchases using PayPal.  This README provides a comprehensive guide to understanding, setting up, and running the application.

## Table of Contents

*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Setup Instructions](#setup-instructions)
*   [Running the App](#running-the-app)
*   [Folder Structure](#folder-structure) (Coming Soon)
*   [API Integration](#api-integration)
*   [PayPal Integration](#paypal-integration)
*   [Testing](#testing)
*   [Deployment](#deployment)
*   [Contributing](#contributing)
*   [License](#license)
*   [Support](#support)

## Features

*   **Home Page:** Displays featured products and categories.
*   **Product Search:** Search for products by name.
*   **Product Details:** View detailed information about a product.
*   **Categories:** Browse products by category.
*   **Cart:** Add, remove, and manage items in the cart.
*   **Checkout:** Complete purchases securely using PayPal.
*   **Responsive Design:**  Provides a seamless user experience across desktop, tablet, and mobile devices.

## Technologies Used

*   **Frontend:** Angular (v17+)
*   **Styling:** Bootstrap, CSS
*   **State Management:** RxJS (BehaviorSubject)
*   **Payment Gateway:** PayPal
*   **API:** Fake Store API ([https://fakestoreapi.com](https://fakestoreapi.com))
*   **Routing:** Angular Router
*   **Testing:** Jasmine, Karma (optional)

## Setup Instructions

### Prerequisites

*   **Node.js:** Ensure you have Node.js installed (v16+ recommended).  Download from [https://nodejs.org/](https://nodejs.org/)
*   **Angular CLI:** Install the Angular CLI globally:

```bash
npm install -g @angular/cli
Steps
Clone the Repository:
Bash

git clone git@github.com:Freddie16/Simple-Shop.git
cd simple-shop
Install Dependencies:
Bash

npm install
Set Up Environment Variables:

Create a .env file in the root directory.
Add your PayPal Client ID:
PAYPAL_CLIENT_ID=your_paypal_client_id
Run the App:
Bash

ng serve
The app will be accessible at http://localhost:4200.

Running the App
Home Page: Browse featured products and categories. Click on a product to view its details.
Cart: Add products to the cart, remove products, and proceed to checkout.
Checkout: Complete the purchase securely using PayPal.
API Integration
The application leverages the Fake Store API to fetch product and category data.  Key API endpoints include:

Get All Products: https://fakestoreapi.com/products
Get Product by ID: https://fakestoreapi.com/products/{id}
Get All Categories: https://fakestoreapi.com/products/categories
Get Products by Category: https://fakestoreapi.com/products/category/{category}
PayPal Integration
PayPal integration facilitates secure payment processing. The integration works as follows:

Client-Side: The PayPal SDK is loaded in index.html. The CheckoutComponent renders the PayPal button and manages payment approval. (Further details on implementation can be found in the code.)
Testing
Unit Tests
Bash

ng test
End-to-End Tests
Bash

ng e2e
Deployment
(Deployment steps will be added here.  Please refer to Angular deployment documentation for general guidance.)  Common methods include building the app and deploying to platforms like Netlify, Vercel, or AWS.

Bash

ng build --prod  # Example production build
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE 1  file for details
