if (workbox) {
    console.log("Yay! Workbox has loaded 🎉");

    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

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
    console.log("Noo! Workbox didn't load 😬");
}

workbox.googleAnalytics.initialize();
