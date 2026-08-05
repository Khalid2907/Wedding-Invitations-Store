const CACHE_NAME = 'rab6-t6-v1';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './css/variables.css',
  './css/animations.css',
  './css/responsive.css',
  './js/app.js',
  './manifest.json',
  './assets/favicon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then((cached) => cached || fetch(e.request)));
});
