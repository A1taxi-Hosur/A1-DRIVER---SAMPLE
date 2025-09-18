const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure all platforms are supported
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Add support for additional file extensions
config.resolver.sourceExts.push('sql');

module.exports = config;