if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('core.js')
        .then(function(registration) {
            console.log('Registered:', registration);
        })
        .catch(function(error) {
            console.log('Registration failed: ', error);
        });
}
