module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.*"
  ],
  "swSrc": "src/service-worker.js",
  "swDest": "dist/service-worker.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};
