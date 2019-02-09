// Log development message
console.log("%cMy website is open source on GitHub! https://github.com/Richienb/richienb.github.io", "font-family: Roboto, sans-serif; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; line-height: 2rem; text-decoration: inherit; text-transform: inherit; font-size: 1.5rem; font-weight: 400; letter-spacing: normal;")

// When the Gravatar image fails to load
document.querySelector(".gravatar--icon").addEventListener("error", () => {
    // Hide the Gravatar image
    document.querySelector(".gravatar--icon").style.display = "none";
})

// Import MDC Drawer
import {
    MDCDrawer
} from "@material/drawer/index"

// Initialise the drawer
const drawer = MDCDrawer.attachTo(document.querySelector(".app--drawer"))

// Import MDC Top App Bar
import {
    MDCTopAppBar
} from "@material/top-app-bar/index"

// Initialise the top app bar
const topAppBar = MDCTopAppBar.attachTo(document.querySelector(".app--bar"))

// Set main content of top app bar
topAppBar.setScrollTarget(document.querySelector(".app--content"))

// Listen for an open menu button click
topAppBar.listen("MDCTopAppBar:nav", () => {

    // Invert the open state of the drawer
    drawer.open = !drawer.open
})

document.querySelector(".drawer--website").addEventListener("click", (e) => {
    // Prevent hash changes
    e.preventDefault()

    // Invert the open state of the drawer
    drawer.open = !drawer.open
})

// Import MDC Dialog
import {
    MDCDialog
} from '@material/dialog/index';

// Setup dialog
const btc_dialog = new MDCDialog(document.querySelector(".btc-dialog"))

// Listen for menu item click
document.querySelector(".btc-dialog--button").addEventListener("click", () => {

    // Open the dialog
    btc_dialog.open()
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
