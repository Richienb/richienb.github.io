// Print out a message in the console
console.log("Ever wanted to help me develop my website or view the source code yourself? Now you can. It's Open Source on GitHub for you to check out: https://github.com/Richienb/richienb.github.io");
// Check that service workers are registered
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
// Enable passive scrolling mode if supported
if ('ontouchstart' in document.documentElement) {
    document.addEventListener('touchstart', onTouchStart, {
        passive: true
    });
}
var $ = require('https://cdn.jsdelivr.net/npm/jquery@3.3/dist/jquery.min.js');

var channelID = "UCxOiLzcbFeW-Ayz_MbgWIXw";
$.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D' + channelID, function (data) {
    var link = data.items[0].link;
    var id = link.substr(link.indexOf("=") + 1);
    $("#youtube_video").attr("src", "https://www.youtube-nocookie.com/embed/" + id + "?showinfo=0&rel=0");
});

require('./index.css')
require('https://cdn.jsdelivr.net/npm/material-design-lite@1/dist/material.indigo-red.min.css');
require('https://cdn.jsdelivr.net/gh/google/material-design-lite@1.3/material.min.js');
require('https://fonts.googleapis.com/css?family=Material+Icons|Roboto')
require('https://cdn.jsdelivr.net/npm/html5shiv@3.7/dist/html5shiv-printshiv.min.js')
