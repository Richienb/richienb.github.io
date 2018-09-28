import '../../node_modules/@polymer/polymer/polymer-element.js';

// Critical CSS
import './index.css';

// Critical JavaScript
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading')
                fn();
            }
        );
    }
}

ready(function() {
    // Print out a message in the console
    console.log("Ever wanted to help me develop my website or view the source code yourself? Now you can. It's Open Source on GitHub for you to check out: https://github.com/Richienb/richienb.github.io");

    // Fade in the document
    var el = document.getElementById("mainbody");

    function fadeIn(el) {
        el.style.opacity = 0;
        var tick = function() {
            el.style.opacity = + el.style.opacity + 0.05;
            if (+ el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    }
    fadeIn(el);
});

// Old browser compatiblity
import '../../node_modules/html5shiv/dist/html5shiv-printshiv.min.js';
import '../../node_modules/normalize.css/normalize.css';
