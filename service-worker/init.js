// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)
// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
if (navigator.serviceWorker.controller) {
    console.log('Active service worker found, no need to register')
} else {

    // Register the ServiceWorker
    navigator.serviceWorker.register('core.js', {
        scope: './'
    }).then(function(reg) {
        console.log('Service worker has been registered for scope:' + reg.scope);
        // Show toast on installation success
        r(function() {
            var snackbarContainer = document.querySelector('#toast-object');
            var data = {
                message: 'This page is now available offline.'
            };
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        })
    });
}
