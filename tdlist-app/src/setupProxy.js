const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://todoapp027-0cf13cb8ff7b.herokuapp.com',
      changeOrigin: true,
    })
  );
};