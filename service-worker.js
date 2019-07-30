importScripts("precache-manifest.715e6c85782dafa5efa12ac37ec0700c.js", "workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});
if (workbox) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

    workbox.googleAnalytics.initialize()
}

