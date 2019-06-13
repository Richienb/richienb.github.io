if (workbox) {
    console.debug("Yay! Workbox has loaded 🎉")

    workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

    workbox.googleAnalytics.initialize()
} else {
    console.debug("Noo! Workbox didn't load 😬")
}
