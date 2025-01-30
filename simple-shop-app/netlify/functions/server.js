const app = require('../../dist/simple-shop-app/server/main.js');

exports.handler = async function(event, context) {
  const response = await app.handle(event);
  return {
    statusCode: response.statusCode,
    headers: response.headers,
    body: response.body
  };
};