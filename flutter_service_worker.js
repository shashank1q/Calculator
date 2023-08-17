'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "928795e35ae8eab60c1b8b62ade1ace3",
".git/config": "2d66e41f251fd6d5e96dfcc579ce2452",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2520b177bf1ae1b4290e886c4cbf7781",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b0b88ec5178c5b38e9d033d67e921ec8",
".git/logs/refs/heads/main": "968220989e6f99d994d2fc719925a96e",
".git/logs/refs/remotes/origin/main": "5f8e783950fea0ef2d7234ca54937ee7",
".git/objects/00/e5f672b1ee0a0ef78c7f98e87cd695fed3ed78": "f072b6e6b2bfdd18e3e048706a459120",
".git/objects/02/240f2240712d03ee94385c6065f26437761d4e": "2203235f9a5320914ba3b65196ac6b3c",
".git/objects/03/292d45b156d725a3bbf365023ce9a76cc48957": "1201726bde601570ed39037795ba2666",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/4e3148f6a508afa392d07673d53ba1c288ff0c": "618a578b49734f0afacf88cc6c296032",
".git/objects/0a/ebd87e90fa7faedd7b9e726e00f28afd83795a": "037b3aa9d350d59e0b002bbb7b983739",
".git/objects/0b/5680ff6f3cb875cdb96ed2b4667de7f3edac42": "f2435287acafc45b00113f21f02d14ad",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/debdd1d4d21b60574e4c1a62faebea5b6b4e4e": "eb2c4f9f2c8bc45450266637dc61dafa",
".git/objects/0f/b27c1bc53d588a38c3ea25692f2848031727ea": "f3c8692ca6d15cb78afceabe837e578e",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/11/de5c37e50cf15f2ed86530bc6476a1bb2e5fa9": "479aac5f0def2dc25422b8523afe0386",
".git/objects/1a/cffb30632e7a903b2b6b1fccf69522e66df56a": "265815cc354469c8028a03eb2ff3d45e",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/b37674ccb19dda046afe5099061c9c1f14f771": "41331c1a8731fa33a500699f83080661",
".git/objects/44/6c015d7989397d91fc40a941275582f4e6f0b6": "33e6aebf83f1a2a117e49bbc4fa8aa0b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/40247a02527f6e525f1bb9cabf185c19223e2a": "6f553e2fc11666561ebda546add5a3b5",
".git/objects/4f/e794cf6c77b6d3e83b2123cbbd183052197c34": "54cbb3fd2831ad9a48b492dcddad28f2",
".git/objects/50/9d50dff4d6fa199348d9f28155dc8302f1dd59": "e96e9244ae2256c8e04f04603319ab20",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/3891bc0df7844e14e4bbfca92dbbd13e8504e6": "b8bed8ed55e4b0b6d65660bf10603aef",
".git/objects/56/5e41e2504b4236c7762b3b16dc884cd7e83caa": "7c50b94c9c40336e69c7e70557292cf1",
".git/objects/61/d68ca52d8c70ec6ddb57a10b6aa9da9c573099": "96719afe5f63ae97dc0edbfd7cb4bbd0",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/023aa5c0bcba329de7cab86877ca888f7efe35": "a2eaba7e4df83f6b8104af641296038e",
".git/objects/68/fca371ea3da6a263affaf1d838cef981dfca7a": "18d61be7854b8876b893f17f7b525c12",
".git/objects/69/a5b75f8446858fcedda8fb74f204e2af63c911": "c60ace33ab44c312bdaa6a45d987c937",
".git/objects/6d/8bf503930e25e35d23c28392b1ec89795891a1": "e645c14638aa1ffbd8e9efff1d3cc414",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/324531f6b8755268752339369a8c9dfe8ce8f9": "f01061adba7edd43e0b07c8ce358d590",
".git/objects/75/ec73bd450db0a8673fac96f7e82bba066e670f": "0304252372370dd9b4044fdca11da189",
".git/objects/82/559963f776ef68a5b0bc5c948fe76ed35c1971": "1c215137d7e51399cfe6bcca90dab019",
".git/objects/82/a0aee04f59d8f6619804d94aaf5907049d1559": "ad888b80d13d0d8013a500504ed51b34",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/e17dc7a657b26b5e1b9f7c566dfd5824d78eff": "a94a4fd95db277ec6d726ddb76490158",
".git/objects/9e/b9257d1b11de0ee0d44ce7c80a4b7d04748778": "17dfaf3984bbac7cf2ee6e40408f6e16",
".git/objects/a0/899fff514fbe27c26e3c2f51377d4fa1c8af54": "bff628c9c9ec0c869a16f2f94a3aeb76",
".git/objects/a6/7a6f140576317bc230eca77452f2c3343c61a3": "1362f31bc48230854d23097fb8e7b211",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/b890b509c90fcba05d3a83e03e45fce87030a1": "9b1b763fd88957e15349d6db44ae78b1",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/43a674cc383b332a54816f7510eba757db2be3": "4e2aba94ac28327ad87f3a86ac13a77b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/3bc5991d98c8dfcabef140b12fa19a9e3d6a77": "b2413ff58e4cda029819b00ae9349131",
".git/objects/cd/6ca1b25f301791d0d2f5839f947829e3db3544": "17e8bc6331892df5e73a2207509e6a28",
".git/objects/ce/4b398d31610aff3562cda729f4c96a1afafc35": "fd8180b90f4d8323adf8c1a891ad630d",
".git/objects/d0/fdc8886772b9ece7e8db4f80ed039eec37054a": "e85b00f5bb53ee77b4a70beaca100c15",
".git/objects/d1/d7e7d30615fe6ec88bb41d6dd5cdd587938a35": "1a0211c86099ca4ff9ddd9b37359ce49",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8b1e38b5525bce91f60c82d9b6f5333cef6af6": "495a08aa51e62eca3b8d8c2c07b12e85",
".git/objects/d9/22a0a96e4a8645e52daa689fd2319265a38602": "acc110d38973a1d7cd00368f12d985f9",
".git/objects/de/2ecfbde3685c21ec642c668503fc2f8fd2811c": "d87c84bbb5d7aa2f4751fe0667ce4b96",
".git/objects/de/7e536758a10be371fb6639b9f0e6ae94a0c317": "257d86409840cde719c9387fcebaa133",
".git/objects/e0/d4ba7dd3f608936b44c77c1986aa85560fc357": "0a7ae1ef373684724dd32d5646b9560a",
".git/objects/e1/a3a5a0a066b1c170ef6dac691b57d0c2c44bf1": "4e49d326a5c18dc2038db8665f1bc8e8",
".git/objects/e5/d7e51ed20aa869f2cbce3cad61dc9e1e564acb": "0cd10091d49daca0b51b2914d7648e2d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/587a34df860a4a9a92f4db9a8fa22ab6d4b396": "e80f2ffdf2a773e6941fb5818af9fd48",
".git/objects/f2/ab7bc7ccb0e49dafb416a41fe28e3baba5cca3": "0e9d46810e6f42e5a5ba7ee07d3bdbce",
".git/objects/f8/401c193f56291984e7dab4b4c1ea2804227206": "c64bca1393428509fa7979c1c0ad8d76",
".git/objects/fe/210c2e0218622b52decfe9adec26aa437e5159": "8b78512c2e54d2e6c18359f02dceb141",
".git/refs/heads/main": "8b30eabc4cfb5466d1a9f3280ad793ac",
".git/refs/remotes/origin/main": "8b30eabc4cfb5466d1a9f3280ad793ac",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "54b58240de237da6313362348d09eb45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b35104eea7ad0aa79eaf423be707be17",
"/": "b35104eea7ad0aa79eaf423be707be17",
"main.dart.js": "b93c56e304c27e196443d6923da57256",
"manifest.json": "5723b42f17425fb1cdda6278e703e85a",
"README.md": "8816f39b3327c52487bc03a7fa3fe24b",
"version.json": "ed710bad5af15d9e8c7353d874be9183"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
