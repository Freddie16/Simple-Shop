const server = require('../../dist/simple-shop-app/server/main.server.mjs');

exports.handler = async function(event, context) {
  const response = await app.handle(event);
  return {
    statusCode: response.statusCode,
    headers: response.headers,
    body: response.body
  };
};