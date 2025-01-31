const express = require('express'); // Import Express (or your framework)
const app = express(); // Create an Express app instance

// ... (Your other Express app setup, routes, middleware, etc.) ...

// Assuming your Angular SSR app is exported as 'app' from main.server.mjs:
const { app: angularApp } = require('../../dist/simple-shop-app/server/main.server.mjs');

// Mount the Angular SSR app at a specific route (or root if needed):
app.use('/', angularApp); // Adjust '/' if needed

exports.handler = async function (event, context) {
  // Use the Express app instance (app) to handle the event
  const result = await app(event, context); // Note the change here
  return {
    statusCode: result.statusCode,
    headers: result.headers,
    body: result.body,
  };
};