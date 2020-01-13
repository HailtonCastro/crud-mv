const proxy = [
    {
      context: '/api',
      target: 'http://192.168.100.83:8080',
      pathRewrite: { '^/api': '' }
    }
  ];
  module.exports = proxy;