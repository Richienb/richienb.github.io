console.log('%cMy website is open source on GitHub! https://github.com/Richienb/richienb.github.io', 'text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; color: #f44336; font-size: 3em');

// Check if service workers are supported
if ('serviceWorker' in navigator) {
    // Wait for the window to finish loading to keep everything performant
    window.addEventListener('load', () => {
        // Register the service worker
        navigator.serviceWorker.register('service-worker.js');
    });
}
// Check if passive scrolling mode is supported
if ('ontouchstart' in document.documentElement) {
    // Enable passive scrolling mode
    document.addEventListener('touchstart', onTouchStart, {passive: true});
}

// Check if the googtrans cookie exists
if (document.cookie.replace(/(?:(?:^|.*;\s*)googtrans\s*\=\s*([^;]*).*$)|^.*$/, "$1").split("/")[2] !== undefined) {
    // Set the value of the selector to the value of the cookie
    document.getElementById("language-selector").value = document.cookie.replace(/(?:(?:^|.*;\s*)googtrans\s*\=\s*([^;]*).*$)|^.*$/, "$1").split("/")[2];
} else {
    // Set the value of the selector to the default, English
    document.getElementById("language-selector").value = "en";
}

// Import MDC Drawer
import {MDCDrawer} from "@material/drawer/index";

// Initialise the drawer
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

// Import MDC Top App Bar
import {MDCTopAppBar} from "@material/top-app-bar/index";

// Initialise the top app bar
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));

// Set main content of top app bar
topAppBar.setScrollTarget(document.getElementById('main-content'));

// Listen for an open menu button click
topAppBar.listen('MDCTopAppBar:nav', () => {

    // Invert the open state of the drawer
    drawer.open = !drawer.open;
});

// Listen for a website link click
document.getElementById("websitelink").addEventListener("click", function() {

    // Close the drawer
    drawer.open = false;
});

// Import MDC Ripple
import {MDCRipple} from '@material/ripple/index';

// For each button, main card area and drawer item
document.querySelectorAll('.content-card .mdc-card__actions .mdc-card__action-buttons .mdc-button, .content-card .mdc-card__primary-action, .mdc-drawer .mdc-drawer__content .mdc-list a.mdc-list-item').forEach(function(el) {

    // Initialise the ripple effect
    MDCRipple.attachTo(el);
});

// Import MDC Select
import {MDCSelect} from "@material/select/index";

// Initialise language selector
const select = new MDCSelect(document.querySelector('.mdc-select'));

// List for a language chosen
select.listen('change', () => {

    // Set the language cookie depending on the selected language
    document.cookie = `googtrans=/en/${select.value}; path=/`

    // Refesh the page to start the translation
    location.reload();
});

// Import html5shiv printshiv
import 'html5shiv/dist/html5shiv-printshiv.js';
