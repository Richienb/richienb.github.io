console.log('%c Currently in development!', 'text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; color: #f44336; font-size: 5em');

import {MDCRipple} from '@material/ripple/index';
// const ripple = new MDCRipple(document.querySelector('.foo-button'));

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

document.querySelectorAll('#content-card .mdc-card__actions .mdc-card__action-buttons .mdc-button, #content-card .mdc-card__primary-action, .mdc-drawer .mdc-drawer__content .mdc-list a.mdc-list-item').forEach(function(thisArg) {
    MDCRipple.attachTo(thisArg);
});

import {MDCSelect} from "@material/select/index";
const select = new MDCSelect(document.querySelector('.mdc-select'));
select.listen('change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/awah8', true);

request.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.responseText);
      Object.keys(data).forEach(function(key) {
          console.log('Key : ' + key + ', Value : ' + data[key].nativeName)
          document.getElementById("language-selector").appendChild(el);
      })
      console.log(data);
    } else {
      // Error :(
      console.err("Unable to load Google Translate");
    }
  }
};

request.send();
request = null;

// for (var i = 0; i < document.querySelectorAll('.mdc-button').length; i++) {
//     MDCRipple.attachTo(document.querySelectorAll('.mdc-button')[i]);
// }

// import mdcAutoInit from '@material/auto-init/index';
//
// mdcAutoInit.register('ripple', MDCRipple);

// if ("onhashchange" in window) {
//     window.addEventListener("hashchange", function() {
//         if (window.location.hash === "#") {
//             window.location.href.substr(0, window.location.href.indexOf('#'))
//         }
//     }, false);
// }

// import mdcAutoInit from '@material/auto-init/index';
// mdcAutoInit.register('ripple', MDCRipple);

import 'html5shiv/dist/html5shiv-printshiv.js';
