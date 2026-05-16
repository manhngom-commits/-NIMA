const CACHE = 'anima-v1';
const ARCHIVOS = [
  '/',
  '/anima_completo.html',
  '/anima_home.html',
  '/anima_carta_natal.html',
  '/anima_dinero.html',
  '/anima_chat.html',
  '/anima_cartas.html',
  '/anima_anio.html',
  '/anima_suscripcion.html',
  '/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
