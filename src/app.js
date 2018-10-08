console.log('%c Currently in development!', 'text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; color: #f44336; font-size: 5em');

if (document.cookie.replace(/(?:(?:^|.*;\s*)googtrans\s*\=\s*([^;]*).*$)|^.*$/, "$1").split("/")[2] !== "") {
    document.getElementById("language-selector").value = document.cookie.replace(/(?:(?:^|.*;\s*)googtrans\s*\=\s*([^;]*).*$)|^.*$/, "$1").split("/")[2];
} else {
    document.getElementById("language-selector").value = "en";
}

import {MDCDrawer} from "@material/drawer/index";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

import {MDCTopAppBar} from "@material/top-app-bar/index";
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

document.getElementById("websitelink").addEventListener("click", function() {
    drawer.open = false;
});

import {MDCRipple} from '@material/ripple/index';
document.querySelectorAll('#content-card .mdc-card__actions .mdc-card__action-buttons .mdc-button, #content-card .mdc-card__primary-action, .mdc-drawer .mdc-drawer__content .mdc-list a.mdc-list-item').forEach(function(el) {
    MDCRipple.attachTo(el);
});

import {MDCSelect} from "@material/select/index";
const select = new MDCSelect(document.querySelector('.mdc-select'));
select.listen('change', () => {
    document.cookie = `googtrans=/en/${select.value}; path=/`
    location.reload();
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false,
        gaTrack: true,
        gaId: 'UA-92292858-9'
    }, 'google_translate_element');
}

import 'html5shiv/dist/html5shiv-printshiv.js';
