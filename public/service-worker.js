console.log("Hello from service worker!")

var preLoad = function() {
    console.log("Installing web app");
    return caches.open("offline").then(function(cache) {
        console.log("caching index and important routes");
        return cache.addAll(["/"]);
    });
};