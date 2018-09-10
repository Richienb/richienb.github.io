/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox has loaded 🎉`);

    workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "4712b588c7d120c8896938462529b33a"
  },
  {
    "url": "error.html",
    "revision": "c5b958aaaf7a72a2918483f97a71913c"
  },
  {
    "url": "favicon.ico",
    "revision": "6e869db8dda60da878658f162ac78773"
  },
  {
    "url": "humans.txt",
    "revision": "ff49ec38859294575eb0e30266ef0e5a"
  },
  {
    "url": "images/Richie Bendall's Website QR Code.eps",
    "revision": "f9d707a8c52b7ecd85c36dfb6b30188c"
  },
  {
    "url": "images/Richie Bendall's Website QR Code.png",
    "revision": "9c31df396ba4e69cda6b5305568467f5"
  },
  {
    "url": "images/Richie Bendall's Website QR Code.svg",
    "revision": "ed44bf62a42e18dfb43ef1d981ac9929"
  },
  {
    "url": "index.html",
    "revision": "dc1bea5c39b3d0d81037c825a1fee41c"
  },
  {
    "url": "manifests/browserconfig.xml",
    "revision": "2020b56bcd3412f144e31e738f6d4750"
  },
  {
    "url": "manifests/site.webmanifest",
    "revision": "86276702ba19a9bc89e3f125926b9282"
  },
  {
    "url": "offline.html",
    "revision": "d181fb77768e7892d84792c9138e80d8"
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
    "revision": "1f4d57bcf2ed44924139a5df68a741d8"
  },
  {
    "url": "social.html",
    "revision": "e29c99237686524e5a8d704a0202c605"
  }
]);

    workbox.routing.registerRoute(".*\.\html", args => {
        return articleHandler.handle(args).then(response => {
            if (!response) {
                return caches.match('offline.html');
            } else if (response.status === 404) {
                return caches.match('404.html');
            } else if (response.status >= 400) {
                return caches.match('error.html');
            }
            return response;
        });
    });

} else {
    console.log(`Noo! Workbox didn't load 😬`);
}

workbox.googleAnalytics.initialize();
