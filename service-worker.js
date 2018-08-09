var CACHE_NAME = 'static-cache';
var urlsToCache = [
    '/index.html',
    '/hosted/material.indigo-red.min.css',
    '/hosted/material.min.js',
    '/offline.html'
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(urlsToCache);
            // Show toast on installation success
            r(function() {
                var snackbarContainer = document.querySelector('#toast-object');
                var data = {
                    message: 'This page is now available offline.'
                };
                snackbarContainer.MaterialSnackbar.showSnackbar(data);
            })
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            return response || fetchAndCache(event.request);
        })
    );
});

function fetchAndCache(url) {
    return fetch(url)
        .then(function(response) {
            // Check if we received a valid response
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return caches.open(CACHE_NAME)
                .then(function(cache) {
                    cache.put(url, response.clone());
                    return response;
                });
        })
        .catch(function(error) {
            console.log('Request failed:', error);
            return cache.match('offline.html')
        });
}
