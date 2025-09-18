module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'react' }]
    ],
    plugins: [
      'react-native-reanimated/plugin',
      // Add inline requires for better performance
      ['@babel/plugin-transform-modules-commonjs', { lazy: true }],
    ],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel',
          ['transform-remove-console', { exclude: ['error', 'warn'] }],
        ],
      },
    },
  };
};