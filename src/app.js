// import {MDCRipple} from '@material/ripple';
// const ripple = new MDCRipple(document.querySelector('.foo-button'));

console.log('%c Currently in development!', 'text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; color: #f44336; font-size: 5em; font-family: "Roboto", "Helvetica", "Arial", sans-serif');

import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

import {MDCTopAppBar} from "@material/top-app-bar";
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

import 'html5shiv/dist/html5shiv-printshiv.js';
