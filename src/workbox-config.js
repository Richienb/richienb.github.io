module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.*"
  ],
  "swSrc": "sw.js",
  "swDest": "service-worker.js",
  "globIgnores": [
    "node_modules/**/*",
    "(workbox-|webpack\.|postcss\.)config\.js",
    "app\.(js|scss)",
    "yarn\.lock",
    "package\.json"
  ]
};
