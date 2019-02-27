importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.debug("Yay! Workbox has loaded 🎉");

    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerRoute(".*\.\html", args => {
        return articleHandler.handle(args).then(response => {
            if (response.status === 404) {
                return caches.match('404.html');
            }
            return response;
        });
    });

} else {
    console.debug("Noo! Workbox didn't load 😬");
}

workbox.googleAnalytics.initialize();
