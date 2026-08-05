const CACHE_NAME = 'rab6-t7-v1';
const ASSETS = [
  './',
  './index.html',
  './css/variables.css',
  './css/style.css',
  './css/animations.css',
  './css/responsive.css',
  './js/app.js',
  './js/starfield.js',
  './js/audio.js',
  './js/countdown.js',
  './js/language.js',
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
