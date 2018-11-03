console.log("%cMy website is open source on GitHub! https://github.com/Richienb/richienb.github.io", "font-family: Roboto,sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; font-size: 1.25rem; line-height: 2rem;")

// Check if passive scrolling mode is supported
if ("ontouchstart" in document.documentElement) {
    // Enable passive scrolling mode
    document.addEventListener("touchstart", function() {
        return
    }, {
        passive: true
    })
}

// // Check if the googtrans cookie exists
// if (document.cookie.replace(/(?:(?:^|.*;\s*)googtrans\s*\=\s*([^;]*).*$)|^.*$/, "$1").split("/")[2] !== undefined) {
//     // Set the value of the selector to the value of the cookie
//     document.getElementById("language-selector").value = document.cookie.replace(/(?:(?:^|.*;\s*)googtrans\s*\=\s*([^;]*).*$)|^.*$/, "$1").split("/")[2]
// } else {
//     // Set the value of the selector to the default, English
//     document.getElementById("language-selector").value = "en"
// }

// Import MDC Drawer
import {
    MDCDrawer
} from "@material/drawer/index"

// Initialise the drawer
const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"))

// Import MDC Top App Bar
import {
    MDCTopAppBar
} from "@material/top-app-bar/index"

// Initialise the top app bar
const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"))

// Set main content of top app bar
topAppBar.setScrollTarget(document.getElementById("main-content"))

// Listen for an open menu button click
topAppBar.listen("MDCTopAppBar:nav", () => {

    // Invert the open state of the drawer
    drawer.open = !drawer.open
})

// Listen for a website link click
document.getElementById("website-menu-item").addEventListener("click", function() {

    // Close the drawer
    drawer.open = false
})

// Import MDC Ripple
import {
    MDCRipple
} from "@material/ripple/index"

// Import MDC Auto Init
import mdcAutoInit from "@material/auto-init"

// Register MDC Ripple as an automatically initialsable object
mdcAutoInit.register("MDCRipple", MDCRipple)

// Automatically initialise the objects
mdcAutoInit()

// // Import MDC Select
// import {
//     MDCSelect
// } from "@material/select/index"

// // Initialise language selector
// const select = new MDCSelect(document.getElementById("language-selector"))
//
// // Listen for a language chosen
// select.listen('MDCSelect:change', () => {
//
//     // Set the language cookie depending on the selected language
//     document.cookie = `googtrans=/en/${select.value} path=/`
//
//     // Refesh the page to start the translation
//     location.reload()
// });

while (document.querySelector(".goog-logo-link").firstChild)
    document.querySelector(".goog-logo-link").removeChild(document.querySelector(".goog-logo-link").firstChild);
var children = [];
for (var i = document.querySelector(".goog-te-gadget").children.length; i--;) {
    // Skip comment nodes on IE8
    if (document.querySelector(".goog-te-gadget").children[i].nodeType != 8)
        children.unshift(document.querySelector(".goog-te-gadget").children[i]);
}
document.querySelector(".goog-te-gadget").innerHTML = (children)

    // Import html5shiv printshiv
    import "html5shiv/dist/html5shiv-printshiv.js"
