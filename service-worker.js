// Previous build registered a service worker that caches the old app shell.
// This stub unregisters it so returning visitors get the new site instead of
// a stale cached version.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.registration.unregister().then(() => {
    return self.clients.matchAll();
  }).then((clients) => {
    clients.forEach((client) => client.navigate(client.url));
  });
});
