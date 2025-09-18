const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Optimize for Expo Go compatibility
config.server = {
  ...config.server,
  port: 8081,
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      // Set proper headers for Expo Go
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      
      return middleware(req, res, next);
    };
  },
};

// Optimize resolver for better compatibility
config.resolver = {
  ...config.resolver,
  platforms: ['ios', 'android', 'native', 'web'],
  sourceExts: [...config.resolver.sourceExts, 'sql', 'json'],
  assetExts: [...config.resolver.assetExts.filter(ext => ext !== 'svg'), 'svg', 'png', 'jpg', 'jpeg', 'gif'],
  alias: {
    '@': __dirname,
  },
};

// Optimize transformer for smaller bundles
config.transformer = {
  ...config.transformer,
  minifierConfig: {
    keep_fnames: true,
    mangle: {
      keep_fnames: true,
    },
  },
  // Enable inline requires for better performance
  inlineRequires: true,
};

// Optimize serializer for better bundle generation
config.serializer = {
  ...config.serializer,
};

module.exports = config;