import '../css/index.css';
import '../../node_modules/material-design-icons/iconfont/material-icons.css';
import '../../node_modules/material-design-lite/dist/material.indigo-red.min.css';
import '../../node_modules/normalize.css/normalize.css';

// Check that service workers are registered
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
// Enable passive scrolling mode if supported
if ('ontouchstart' in document.documentElement) {
    document.addEventListener('touchstart', onTouchStart, {passive: true});
}

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

import '../../node_modules/material-design-lite/material.min.js'
import '../../node_modules/html5shiv/dist/html5shiv-printshiv.min.js'
