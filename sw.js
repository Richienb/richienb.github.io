if (workbox) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

    workbox.googleAnalytics.initialize()
}
