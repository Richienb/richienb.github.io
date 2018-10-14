module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.*"
  ],
  "swSrc": "sw.js",
  "swDest": "service-worker.js",
  "globIgnores": [
    "(workbox-|webpack\.|postcss\.)config\.js",
    "node_modules/**/*"
  ]
};
