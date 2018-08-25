/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_config.yml",
    "revision": "59b51fb8a00902b963f2ccd668f85599"
  },
  {
    "url": "404.html",
    "revision": "8b654a87aed74fa2c2b5ab960a055ded"
  },
  {
    "url": "config.txt",
    "revision": "0190de28a860f94d0d66ebff99b5fa33"
  },
  {
    "url": "favicon.ico",
    "revision": "6e869db8dda60da878658f162ac78773"
  },
  {
    "url": "hosted/material.indigo-red.min.css",
    "revision": "5c74be021c1cc26962b0f7f3326125c8"
  },
  {
    "url": "humans.txt",
    "revision": "95b490265640cca4ece415cfa71bdd90"
  },
  {
    "url": "index.html",
<<<<<<< HEAD
    "revision": "5db2d6ef9acc33a6fe871240f187ab26"
=======
    "revision": "6b869372fe0993de1ac9739819d92d76"
>>>>>>> 8b314b535e3164a497d2bf7ecc568412834c0bad
  },
  {
    "url": "LICENSE.md",
    "revision": "4a92d25f7942a8a90872528acf37c014"
  },
  {
    "url": "manifests/browserconfig.xml",
    "revision": "2e3d95804d27c5fe770974d14fe00203"
  },
  {
    "url": "manifests/site.webmanifest",
    "revision": "8580885e4066d895320b5b307e44ec1a"
  },
  {
    "url": "offline.html",
    "revision": "8b00d61394eccf394f18c59d56d364f8"
  },
  {
    "url": "README.md",
    "revision": "2778b14f8cd411415dda5870d73a6e7e"
  },
  {
    "url": "resources/android-chrome-144x144.png",
    "revision": "18143a8dfaf8fc07f74d00c025c31eaa"
  },
  {
    "url": "resources/android-chrome-192x192.png",
    "revision": "62921ca4fa4aacc3b3025e82403fa937"
  },
  {
    "url": "resources/android-chrome-256x256.png",
    "revision": "371b5f29d5972d4c407a3841a7fc6bf5"
  },
  {
    "url": "resources/android-chrome-36x36.png",
    "revision": "f74ad85385d2a6c4c06e99416c2a6ce2"
  },
  {
    "url": "resources/android-chrome-384x384.png",
    "revision": "e0e8966698978b3d3a0459734e07db00"
  },
  {
    "url": "resources/android-chrome-48x48.png",
    "revision": "b6c0ef0e6e1c9fded4727dc86227cb09"
  },
  {
    "url": "resources/android-chrome-512x512.png",
    "revision": "73dc647d098e4270eb3159bf89d253d3"
  },
  {
    "url": "resources/android-chrome-72x72.png",
    "revision": "31a278bda6ca9b02ffa1444e0291ad69"
  },
  {
    "url": "resources/android-chrome-96x96.png",
    "revision": "9e0d4d10aea7d6ee4537e788ca0e64e5"
  },
  {
    "url": "resources/mstile-144x144.png",
    "revision": "bed8803d8727886a074849b8cbfd8288"
  },
  {
    "url": "resources/mstile-150x150.png",
    "revision": "86d57b91a08115718569397e62fdf47c"
  },
  {
    "url": "resources/mstile-310x150.png",
    "revision": "7cfc0572e17a4763ca02e581ab6f9003"
  },
  {
    "url": "resources/mstile-310x310.png",
    "revision": "a1f609cae5c14c18811fa7cb64ccb601"
  },
  {
    "url": "resources/mstile-70x70.png",
    "revision": "75280d32b89cff69b5a083013ec39635"
  },
  {
    "url": "robots.txt",
    "revision": "8ca42d63cff3e44c6085add78dd27a94"
  },
  {
    "url": "workbox-config.js",
    "revision": "5fee5a9cf219335a8f572478b432f31f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
