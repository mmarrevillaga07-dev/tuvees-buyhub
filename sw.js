/* ====================================================
   TUVEES BUYHUB PRODUCTION SERVICE WORKER (GitHub Pages)
   ==================================================== */

const CACHE_NAME = 'tuvees-v2'; // Incremented version to clear old cache

// Prefix assets with your repository sub-folder name
const ASSETS = [
  '/tuvees-buyhub/',
  '/tuvees-buyhub/index.html',
  '/tuvees-buyhub/styles.css',
  '/tuvees-buyhub/app.js',
  '/tuvees-buyhub/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting()) // Force immediate activation
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // Automatically purge the old v1 cache
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
