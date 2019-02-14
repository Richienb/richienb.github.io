importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js');

if (workbox) {
    console.debug("Yay! Workbox has loaded 🎉");

    workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "a0ddc245d98b5863d665fe9e4c3d03d2"
  },
  {
    "url": "bundle.css",
    "revision": "ada20f0ec603550e4f03a3f72131abfa"
  },
  {
    "url": "bundle.js",
    "revision": "c683d02e8a8a38bebfea85468a2bb010"
  },
  {
    "url": "favicon.ico",
    "revision": "2657b54e3d440e478771c0e274e8da9b"
  },
  {
    "url": "humans.txt",
    "revision": "ff6c3b45e71d19b034a41ae98f3b4716"
  },
  {
    "url": "images/manifest/icon-144x144.png",
    "revision": "0a168734f0b3871a5f9de96827545411"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "273ef36bc985015661d813f28d502d3e"
  },
  {
    "url": "images/manifest/icon-48x48.png",
    "revision": "1171b7a76bf837e1f0004ea60af0c3f7"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "f4de05c892d204327695edc2e1ab4e56"
  },
  {
    "url": "images/manifest/icon-72x72.png",
    "revision": "5e0bfd6689df46f2c24fe7068bbfad71"
  },
  {
    "url": "images/manifest/icon-96x96.png",
    "revision": "2e8fd5e6f7d379acc17721cbf14072e1"
  },
  {
    "url": "images/QR Code.png",
    "revision": "c5d9fe11bbfdb6b7331390c10c09d878"
  },
  {
    "url": "images/Show Off.png",
    "revision": "8c36ec9aadf81eec5b20cb3809304e72"
  },
  {
    "url": "index.html",
    "revision": "e0da5e38d524ea82fb85d23b630729ee"
  },
  {
    "url": "opensearch.xml",
    "revision": "956f7466384de55520a7b8b5c65518bb"
  },
  {
    "url": "robots.txt",
    "revision": "c37bacbf128c47a3d490dc09cf02c43d"
  },
  {
    "url": "site.webmanifest",
    "revision": "8c1cb0d176b38be8305717115e760e50"
  }
]);

    workbox.routing.registerRoute(".*\.\html", args => {
        return articleHandler.handle(args).then(response => {
            if (!response) {
                return caches.match('error.html#Offline#Try%20again%20later');
            } else if (response.status === 404) {
                return caches.match('404.html');
            }
            return response;
        });
    });

} else {
    console.debug("Noo! Workbox didn't load 😬");
}

workbox.googleAnalytics.initialize();
