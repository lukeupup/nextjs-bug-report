console.log('###########');
const webpack = require('webpack');
module.exports = {
  webpack (config, options) {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js']) {
        entries['main.js'].unshift('./test.js');
      }

      return entries;
    }
    return config;
  }
}
