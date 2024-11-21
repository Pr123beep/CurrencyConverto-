const CACHE_NAME = "currency-converto-v1";
const assetsToCache = [
    "./",
    "./index.html",
    "./stylee.css",
    "./script.js",
    "./Converto.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(assetsToCache))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
