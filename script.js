addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('/script.js')
    console.log(sw)
})

async function notify() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BPyo_2l71GINR4gYLtlg4UJFVXvozkIWN2E8BBABgn38O9XJvC_0ixcXskSpj-ReRAPioyIhR7R15JZDJdxQ7Yw'
    })
    console.log(JSON.stringify(push))
}
notify();
// var serviceWorker = serviceWorkerRegistration.active;
// console.log(serviceWorker)

// globalScope.addEventListener('activate', function(event) {
//   var cacheWhitelist = ['v2'];

//   event.waitUntil(
//     caches.forEach(function(cache, cacheName) {
//       if (cacheWhitelist.indexOf(cacheName) == -1) {
//         // return caches.delete(cacheName);
//         console.log(cache.delete(cacheName))
//       }
//     })
//   );
// }); 
