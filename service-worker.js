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
self.__precacheManifest = [{
        "url": "404.html",
        "revision": "9ec76bb896d15f7d12e134e792aca8dd"
    },
    {
        "url": "config.txt",
        "revision": "0190de28a860f94d0d66ebff99b5fa33"
    },
    {
        "url": "dist/404.html",
        "revision": "d41d8cd98f00b204e9800998ecf8427e"
    },
    {
        "url": "favicon.ico",
        "revision": "6e869db8dda60da878658f162ac78773"
    },
    {
        "url": "gulpfile.js",
        "revision": "81afef775b7b6e2753874728fbb65b5a"
    },
    {
        "url": "humans.txt",
        "revision": "367309ce40bccea46c431ccb762d69fa"
    },
    {
        "url": "index.css",
        "revision": "9d31189e626c824ae81457370aebd2a2"
    },
    {
        "url": "index.html",
        "revision": "78bd956ef30e0182790ae21e857a4bae"
    },
    {
        "url": "index.js",
        "revision": "0a38d6c6ae0bf29039f181f0ed45cfd4"
    },
    {
        "url": "loading.css",
        "revision": "a6a26ccad53d495e5ab1461d4e472846"
    },
    {
        "url": "manifests/browserconfig.xml",
        "revision": "2e3d95804d27c5fe770974d14fe00203"
    },
    {
        "url": "manifests/site.webmanifest",
        "revision": "716055c94cbc16a5b4600ddf2e531185"
    },
    {
        "url": "offline.html",
        "revision": "a5599cc8b021bdc4e9c42b2e3ac6bfa7"
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
        "url": "sitemap.xml",
        "revision": "77b98a828270c147ea996ae678fd1b7a"
    },
    {
        "url": "social.html",
        "revision": "e1f88d1e1127ee9ac9b3feef96352e17"
    },
    {
        "url": "workbox-config.js",
        "revision": "3c8668ac6fee4d4e9513abe7b22a9dd0"
    }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});