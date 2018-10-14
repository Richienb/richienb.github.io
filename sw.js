importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js');

if (workbox) {
    console.log("Yay! Workbox has loaded 🎉");

    workbox.precaching.precacheAndRoute([]);

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
