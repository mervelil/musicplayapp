const CACHE ='Music-Player-App'
const FILES = ['/Music-Player-App/images/faded.png', '/Music-Player-App/images/fallingdown.jpg','/Music-Player-App/images/favicon.ico ','/Music-Player-App/images/ratherbe.jpg','/Music-Player-App/images/stay.png','/Music-Player-App/music/Faded.mp3','/Music-Player-App/music/fallingdown.mp3','/Music-Player-App/music/Rather Be.mp3','/Music-Player-App/music/stay.mp3', '/Music-Player-App/index.html','/Music-Player-App/manifest.json','/Music-Player-App/script.js','/Music-Player-App/style.css','/Music-Player-App/sw.js']
function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)
function cacheCB(e) { //cache first
  let req = e.request
  e.respondWith(
    caches.match(req)
    .then(r1 => r1 || fetch(req))
    .catch(console.log)
  )
}
self.addEventListener('fetch', cacheCB)