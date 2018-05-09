var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/styles/404style.css',
  '/styles/simplestyle.css',
  '/scripts/script.js',
  '/images/background.jpg',
  '/images/favicon.png',
  '/privacy',
  '/terms',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
