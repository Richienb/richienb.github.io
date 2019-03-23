importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

if (workbox) {
    console.debug("Yay! Workbox has loaded 🎉");

    workbox.precaching.precacheAndRoute([]);

} else {
    console.debug("Noo! Workbox didn't load 😬");
}

workbox.googleAnalytics.initialize();
