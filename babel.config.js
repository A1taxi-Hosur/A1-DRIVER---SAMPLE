module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'react' }]
    ],
    plugins: [
      'react-native-reanimated/plugin',
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