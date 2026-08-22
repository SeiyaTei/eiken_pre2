// ==========================================
// 英検準2級 マジカルクエスト Service Worker
// ネットワーク優先（最新コード自動取得）キャッシュエンジン
// ==========================================

const CACHE_NAME = 'eiken-pre2-magic-v3';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './data.js',
  './manifest.json'
];

// 1. インストール時に基本ファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. 新しいバージョン配信時に古いキャッシュを自動全消去
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. 通信時は常に最新のGitHubデータを優先取得（Network-First）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // オフライン時のみキャッシュから返す
        return caches.match(event.request);
      })
  );
});
