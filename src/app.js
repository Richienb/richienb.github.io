console.log('%c Currently in development!', 'text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; color: #f44336; font-size: 5em');

import {MDCRipple} from '@material/ripple';
// const ripple = new MDCRipple(document.querySelector('.foo-button'));

import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

import {MDCTopAppBar} from "@material/top-app-bar";
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

document.getElementById("websitelink").addEventListener("click", function() {
    drawer.open = false;
});

for (var i = 0; i < document.querySelectorAll('.mdc-button').length; i++) {
    MDCRipple.attachTo(document.querySelectorAll('.mdc-button')[i]);
}

// import mdcAutoInit from '@material/auto-init';
//
// mdcAutoInit.register('ripple', MDCRipple);

if ("onhashchange" in window) {
    window.addEventListener("hashchange", function() {
        if (window.location.hash === "#") {
            window.location.href.substr(0, window.location.href.indexOf('#'))
        }
    }, false);
}

// import mdcAutoInit from '@material/auto-init';
// mdcAutoInit.register('ripple', MDCRipple);

import 'html5shiv/dist/html5shiv-printshiv.js';
