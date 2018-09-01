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
    "revision": "474f14a024e368440e2f95769cff7bb4"
  },
  {
    "url": "404.html",
    "revision": "417377185e4cd998b8cd9edd8e0f13be"
  },
  {
    "url": "config.txt",
    "revision": "b0eee78989b2e84093f5080802103273"
  },
  {
    "url": "favicon.ico",
    "revision": "6e869db8dda60da878658f162ac78773"
  },
  {
    "url": "humans.txt",
    "revision": "f2785f9e18e79de6a8bc239984d57846"
  },
  {
    "url": "index.html",
    "revision": "0d64881e0e1bfd3a81198f6440ce593a"
  },
  {
    "url": "LICENSE.md",
    "revision": "4a92d25f7942a8a90872528acf37c014"
  },
  {
    "url": "manifests/browserconfig.xml",
    "revision": "d8fb5d96b437e9ae6879cf649d3bbfc8"
  },
  {
    "url": "manifests/site.webmanifest",
    "revision": "8580885e4066d895320b5b307e44ec1a"
  },
  {
    "url": "offline.html",
    "revision": "2bdce29eba5b0615d17beae69e77b4e0"
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
    "revision": "dc83ab140719c527aed07f88a942b78f"
  },
  {
    "url": "sitemap.xml",
    "revision": "a5ed46ddad2effb7550ca9c5bbfdc6b4"
  },
  {
    "url": "workbox-config.js",
    "revision": "5fee5a9cf219335a8f572478b432f31f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
