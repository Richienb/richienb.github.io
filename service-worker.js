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
    "revision": "99ea946f6e8c903081ec9bf0f9c29aa1"
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
    "url": "hosted/html5shiv-printshiv.min.js",
    "revision": "78a8563b9b85d0b668db47a3d6482ac4"
  },
  {
    "url": "hosted/material.indigo-red.min.css",
    "revision": "f177106257afeb8bcd3628027cf54f02"
  },
  {
    "url": "hosted/material.min.js",
    "revision": "6b40f3f652f6ff2c4026a10a857b059a"
  },
  {
    "url": "hosted/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "hosted/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "hosted/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "hosted/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "hosted/README.txt",
    "revision": "a1b076cbef92ad9a8bc9271c32188b88"
  },
  {
    "url": "hosted/roboto.css",
    "revision": "676c9023fff253e2bea4e3f0920c4ea2"
  },
  {
    "url": "humans.txt",
    "revision": "cc89b1f994c0fb11bc7b6a5040755b72"
  },
  {
    "url": "index.html",
    "revision": "700a680292d34bcc1d2fa29c957ddd64"
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
    "revision": "49af799157bfb829bef7a52d4d99adef"
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
    "url": "workbox-config.js",
    "revision": "1667d76c538bdf070575a34a89885767"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
