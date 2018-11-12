console.log("%cMy website is open source on GitHub! https://github.com/Richienb/richienb.github.io", "font-family: Roboto, sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; line-height: 2rem; text-decoration: inherit; text-transform: inherit; font-size: 1.5rem; font-weight: 400; letter-spacing: normal;")

// Check if passive scrolling mode is supported
if ("ontouchstart" in document.documentElement) {
    // Enable passive scrolling mode
    document.addEventListener("touchstart", function() {
        return
    }, {
        passive: true
    })
}

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
import mdcAutoInit from "@material/auto-init/index"

// Register MDC Ripple as an automatically initialisable object
mdcAutoInit.register("MDCRipple", MDCRipple)

// Automatically initialise the objects
mdcAutoInit()

// Import html5shiv printshiv
import "html5shiv/dist/html5shiv-printshiv"
