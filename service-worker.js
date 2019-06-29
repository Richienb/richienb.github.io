importScripts("precache-manifest.fa81d9d1f51d469a67aac00c8540d1f3.js", "workbox-v4.3.1/workbox-sw.js")
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"})
if (workbox) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

    workbox.googleAnalytics.initialize()
}

