const webpackConfig = require('../webpack.config');
const cssRule = webpackConfig.module.rules[0];

module.exports = ({ config }) => {
  config.module.rules = [
    // replace mini-css-extract-plugin with style-loader
    {
      test: /\.css$/,
      use: ['style-loader', ...cssRule.use.slice(1)]
    },
    ...webpackConfig.module.rules.slice(1)
  ];


  config.externals = Object.assign({
      'jsdom': 'window',
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': 'window',
      'react/addons': true,
  }, config.externals);


  // is not taken from default webpack... ?
  config.node = {
    fs: "empty",
        module: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
        dns: "empty"
  };

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
}
