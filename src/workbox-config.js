module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.*"
  ],
  "swSrc": "sw.js",
  "swDest": "service-worker.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};
