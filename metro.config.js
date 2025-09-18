const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Simplify configuration for better Expo Go compatibility
config.resolver = {
  ...config.resolver,
  platforms: ['ios', 'android', 'native', 'web'],
  sourceExts: [...config.resolver.sourceExts, 'sql', 'json'],
  assetExts: [...config.resolver.assetExts.filter(ext => ext !== 'svg'), 'svg'],
  unstable_enablePackageExports: true,
  unstable_conditionNames: ['react-native', 'browser', 'default'],
};

// Remove complex transformer configurations that can cause issues
config.transformer = {
  ...config.transformer,
  // Keep it simple for Expo Go
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: false,
    },
  }),
};

module.exports = config;