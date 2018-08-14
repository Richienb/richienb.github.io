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
    "revision": "9dba523f2f7e074e00ffcb2c390426fa"
  },
  {
    "url": "app/icon.icns",
    "revision": "e1d1d60a1389eeb4da4c81f9cac6d5ce"
  },
  {
    "url": "app/icon.png",
    "revision": "2ab2da22d68525713dace7caf1bc5a66"
  },
  {
    "url": "app/README.md",
    "revision": "659b488fa48831faaf586db4c489a0da"
  },
  {
    "url": "favicon.ico",
    "revision": "6e869db8dda60da878658f162ac78773"
  },
  {
    "url": "hosted/html5shiv-printshiv.min.js",
    "revision": "6b82202181264d00d71a23055e0586cd"
  },
  {
    "url": "hosted/material.indigo-red.min.css",
    "revision": "5bbc0c2a05208ffb84d398201d103c30"
  },
  {
    "url": "hosted/material.min.js",
    "revision": "1e51dd4b143b8a53911bcf7df5306292"
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
    "revision": "931eeacea333a4a7abd36ac96442ac8b"
  },
  {
    "url": "hosted/roboto.css",
    "revision": "f2fe07245ae56a47e71cc06a547273b4"
  },
  {
    "url": "humans.txt",
    "revision": "cc89b1f994c0fb11bc7b6a5040755b72"
  },
  {
    "url": "index.html",
    "revision": "e3611f25763c46e5a5ecabe1902a1461"
  },
  {
    "url": "LICENSE.md",
    "revision": "4f5b3dd8cb2cf21cdb0d6ec3c1fe3bfd"
  },
  {
    "url": "manifests/browserconfig.xml",
    "revision": "d8fb5d96b437e9ae6879cf649d3bbfc8"
  },
  {
    "url": "manifests/site.webmanifest",
    "revision": "bae7e9bbf5260dbe8b439acf17bd9c6d"
  },
  {
    "url": "offline.html",
    "revision": "f38530ed8a685fdc8e983552ebad85e6"
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
    "url": "resources/apple-touch-icon-114x114-precomposed.png",
    "revision": "6a578429491daf45cdf301d356054e92"
  },
  {
    "url": "resources/apple-touch-icon-114x114.png",
    "revision": "4d0715e9c66d4d19f27aea049cdcbde7"
  },
  {
    "url": "resources/apple-touch-icon-120x120-precomposed.png",
    "revision": "512be5449be6c85ad0c09c7354eca0c3"
  },
  {
    "url": "resources/apple-touch-icon-120x120.png",
    "revision": "325f9ac7c81a3970332f59e8e507b844"
  },
  {
    "url": "resources/apple-touch-icon-144x144-precomposed.png",
    "revision": "8fe9313b4344157382542c414b715620"
  },
  {
    "url": "resources/apple-touch-icon-144x144.png",
    "revision": "0a9df7c7a0a8f376be7997e60525f57f"
  },
  {
    "url": "resources/apple-touch-icon-152x152-precomposed.png",
    "revision": "7420da70f9f75827a4a665806fee5409"
  },
  {
    "url": "resources/apple-touch-icon-152x152.png",
    "revision": "1868be0b4eda6d98c41870a739f9ef2f"
  },
  {
    "url": "resources/apple-touch-icon-180x180-precomposed.png",
    "revision": "08f8948657114954dc709bc529526ccf"
  },
  {
    "url": "resources/apple-touch-icon-180x180.png",
    "revision": "57610515d913669f2a4dda2388d23e08"
  },
  {
    "url": "resources/apple-touch-icon-57x57-precomposed.png",
    "revision": "0c174a1e3b9624b38e56d34df05734a8"
  },
  {
    "url": "resources/apple-touch-icon-57x57.png",
    "revision": "843d8927faa10a208c9c11746269c450"
  },
  {
    "url": "resources/apple-touch-icon-60x60-precomposed.png",
    "revision": "a381efb81282572c260ff17fe97dcffe"
  },
  {
    "url": "resources/apple-touch-icon-60x60.png",
    "revision": "fc9f8117ef4ae80d7c4404cc62dd86f0"
  },
  {
    "url": "resources/apple-touch-icon-72x72-precomposed.png",
    "revision": "55f82ddc7690546557d2c6479a575bed"
  },
  {
    "url": "resources/apple-touch-icon-72x72.png",
    "revision": "7e3ceda06762f34d5731b99904af9a11"
  },
  {
    "url": "resources/apple-touch-icon-76x76-precomposed.png",
    "revision": "8086bd8a5cfa29b0dd2f1022f1c40207"
  },
  {
    "url": "resources/apple-touch-icon-76x76.png",
    "revision": "936c1d2d2093735832be80d257a7a170"
  },
  {
    "url": "resources/apple-touch-icon-precomposed.png",
    "revision": "08f8948657114954dc709bc529526ccf"
  },
  {
    "url": "resources/apple-touch-icon.png",
    "revision": "57610515d913669f2a4dda2388d23e08"
  },
  {
    "url": "resources/favicon-16x16.png",
    "revision": "880bbc19bc0f4c30985486f02a8085c0"
  },
  {
    "url": "resources/favicon-194x194.png",
    "revision": "9bcd7a67c1e97225b9754a1a89f66777"
  },
  {
    "url": "resources/favicon-32x32.png",
    "revision": "f6e47e981147c51c3aa1aa4f328c06b2"
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
    "url": "resources/og-image.jpg",
    "revision": "ca2842f333da01c7da6587aa24c2ca51"
  },
  {
    "url": "resources/safari-pinned-tab.svg",
    "revision": "b86662dc352a4ebce96b4dc428149e99"
  },
  {
    "url": "robots.txt",
    "revision": "dc83ab140719c527aed07f88a942b78f"
  },
  {
    "url": "workbox-config.js",
    "revision": "a9c74bb7daa2e46e04a9b8dda4aeeec8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
