const path = require('path');
const { override, addBabelPresets } = require('customize-cra');

module.exports = {
  paths: (paths, env) => {
    paths.appIndexJs = path.resolve(__dirname, 'client/index.jsx');
    paths.appSrc = path.resolve(__dirname, 'client');
    paths.appBuild = path.resolve(__dirname, 'dist');
    return paths;
  },
  webpack: override(addBabelPresets('@emotion/babel-preset-css-prop')),
};
