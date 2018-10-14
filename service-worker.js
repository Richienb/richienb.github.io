importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js');

if (workbox) {
    console.log("Yay! Workbox has loaded 🎉");

    workbox.precaching.precacheAndRoute([
  {
    "url": "_config.yml",
    "revision": "474f14a024e368440e2f95769cff7bb4"
  },
  {
    "url": "bundle.css",
    "revision": "873ac12c6fe74002f1f8cd1fae33acfa"
  },
  {
    "url": "bundle.js",
    "revision": "364e4d45f2647773716b2c5cc4d6b104"
  },
  {
    "url": "error.html",
    "revision": "f96330783ef4b898c02f620429b66e48"
  },
  {
    "url": "favicon.ico",
    "revision": "42adc811cc859005528c920482c2ee41"
  },
  {
    "url": "humans.txt",
    "revision": "ff49ec38859294575eb0e30266ef0e5a"
  },
  {
    "url": "images/manifest/icon-144x144.png",
    "revision": "a9fe9e0011f3f3cd101a1f4a8166fa22"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "35d24c5bae2808aa7dac78dfef86debe"
  },
  {
    "url": "images/manifest/icon-48x48.png",
    "revision": "4311f9ab3644171ff114a50b92f06c64"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "bb302c1523a6d9aa0b149c5b8ea04dd0"
  },
  {
    "url": "images/manifest/icon-72x72.png",
    "revision": "231a4722e8a83243b51d9f808c9d5f10"
  },
  {
    "url": "images/manifest/icon-96x96.png",
    "revision": "6f82a89e998446ef9e09136c2ff2e3e7"
  },
  {
    "url": "images/Richie Bendall's Website QR Code.png",
    "revision": "c5d9fe11bbfdb6b7331390c10c09d878"
  },
  {
    "url": "index.html",
    "revision": "d11d72bcb6c4ddc2ad2267c5ec259761"
  },
  {
    "url": "LICENSE.md",
    "revision": "4a92d25f7942a8a90872528acf37c014"
  },
  {
    "url": "manifest.json",
    "revision": "8c1cb0d176b38be8305717115e760e50"
  },
  {
    "url": "precache-manifest.96706ec75adbf90ef8bd59d6dd1b4869.js",
    "revision": "96706ec75adbf90ef8bd59d6dd1b4869"
  },
  {
    "url": "README.md",
    "revision": "42ab9df5a1f367f0b2de89ae7e4a4bc5"
  },
  {
    "url": "robots.txt",
    "revision": "dc83ab140719c527aed07f88a942b78f"
  },
  {
    "url": "sitemap.xml",
    "revision": "665ee3f137be67390cd7f048dbe00d96"
  },
  {
    "url": "sw.js",
    "revision": "1949931dada5d74b491dfa14c23f8a1e"
  }
]);

    workbox.routing.registerRoute(".*\.\html", args => {
        return articleHandler.handle(args).then(response => {
            if (!response) {
                return caches.match('error.html#Offline#Try%20again%20later');
            } else if (response.status === 404) {
                return caches.match('error.html#Error%20404#Page%20not%20found');
            } else if (response.status >= 400) {
                return caches.match('error.html#Error%20' + response.status + "#An%20unexpected%20error%20has%20occurred");
            }
            return response;
        });
    });

} else {
    console.log("Noo! Workbox didn't load 😬");
}

workbox.googleAnalytics.initialize();
