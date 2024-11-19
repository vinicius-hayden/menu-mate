const path = require('path');

module.exports = {
  webpack(config) {
    // Resolve the '@' alias to the 'src' directory
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@menumate/core': path.resolve(__dirname, '../../packages/core') // Ensure this path points correctly to your core package
    };
    return config;
  },
};
