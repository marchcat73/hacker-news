module.exports = (config) => {
  require('react-app-rewire-postcss')(config, {
    plugins: (loader) => [
      require('postcss-import'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      }),
      require('postcss-nested'),
      require('postcss-css-variables'),
      require('postcss-flexbugs-fixes'),
    ],
  });

  return config;
};
