const path = require("path");

const resolve = (_path) => {
  return path.resolve(__dirname, _path);
};

module.exports = {
  // entry: "./src/index.js",
  // entry: resolve("src/index.js"),
  entry: {
    main: resolve("src/index.js"),
  },
  output: {
    filename: "bundle.js",
    path: resolve("dist"),
  },
  optimization: {
    // usedExports: true,
    splitChunks: {
      chunks: "async",
      minSize: 1000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
