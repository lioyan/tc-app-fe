module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "One Day";
      return args;
    });
  },
};
