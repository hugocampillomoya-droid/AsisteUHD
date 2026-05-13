const CACHE_NAME = "asisteuhd-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon1.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Cache-first para recursos propios (mismo dominio)
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
    return;
  }

  // Para recursos externos (CDN fuentes/iconos): red normal
  event.respondWith(fetch(event.request).catch(() => caches.match("./")));
});
