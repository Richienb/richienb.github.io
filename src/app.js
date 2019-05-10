// Log development message
console.log("%cMy website is open source on GitHub! https://github.com/Richienb/richienb.github.io", "font-family: Roboto, sans-serif -moz-osx-font-smoothing: grayscale -webkit-font-smoothing: antialiased line-height: 2rem text-decoration: inherit text-transform: inherit font-size: 1.5rem font-weight: 400 letter-spacing: normal")

// Import JQuery
import $ from "jquery"

// Hide Gravatar image if it fails to load
$(".gravatar__icon").on("error", () => $(".gravatar").hide())

// Import MDC Drawer
import {
    MDCDrawer,
} from "@material/drawer"

// Initialise the drawer
const drawer = MDCDrawer.attachTo($(".app--drawer").get(0))

// Import MDC Top App Bar
import {
    MDCTopAppBar,
} from "@material/top-app-bar"

// Initialise the top app bar
const topAppBar = MDCTopAppBar.attachTo($(".app--bar").get(0))

// When open menu button clicked invert the open state of the drawer
topAppBar.listen("MDCTopAppBar:nav", () => drawer.open = !drawer.open)

$(".drawer--website").click((e) => {
    // Prevent hash changes
    e.preventDefault()

    // Invert the open state of the drawer
    drawer.open = !drawer.open
})

// Import MDC Dialog
import {
    MDCDialog,
} from "@material/dialog"

// Setup dialog
const supportDialog = new MDCDialog($(".support-dialog").get(0))

// Listen for menu item click
$(".support-dialog--button").click((e) => {
    // Prevent hash changes
    e.preventDefault()

    // Open the dialog
    supportDialog.open()
})

// Import MDC Ripple
import {
    MDCRipple,
} from "@material/ripple"

// Import MDC Auto Init
import mdcAutoInit from "@material/auto-init"

// Register MDC Ripple as an automatically initialisable object
mdcAutoInit.register("MDCRipple", MDCRipple)

// Automatically initialise the objects
mdcAutoInit()

// Unbound each MDC icon button that is using MDCRipple
$(".mdc-icon-button[data-mdc-auto-init=\"MDCRipple\"].mdc-ripple-upgraded").each(async (_, {
    MDCRipple,
}) => MDCRipple.unbounded = true)

// Custom array cycler
Array.prototype.cycle = function(str) {
    // Get index of string in Array
    const i = this.indexOf(str)

    // If item not found return undefined
    if (i === -1) return undefined

    // If item found return next value
    return this[(i + 1) % this.length]
}

// Theme handler
const handleTheme = () => {
    // Get current theme
    switch (localStorage.getItem("theme")) {
    // If theme is "light"
    case "light":
        $(".theme--toggle__svg").html("<path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/>")
        break
        // If theme is "dark"
    case "dark":
        $(".theme--toggle__svg").html("<path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>")
        break
        // If theme is "auto"
    default:
        $(".theme--toggle__svg").html("<path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M11 7l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L13 7h-2zm-.15 5.65L12 9l1.15 3.65h-2.3zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z\"/>")
    }
}

// If theme doesn't exist, set it to "auto"
if (["auto", "light", "dark"].indexOf(localStorage.getItem("theme")) === -1) localStorage.setItem("theme", "auto")

// Handle the current theme
handleTheme()

// When theme toggle button clicked
$(".theme-toggle").click((e) => {
    // Prevent hash changes
    e.preventDefault()

    // Get the next theme
    localStorage.setItem("theme", ["auto", "light", "dark"].cycle(localStorage.getItem("theme")))

    // Handle the current theme
    handleTheme()
})

// Import Auth0 Lock
import {
    Auth0Lock,
} from "auth0-lock"

// Initialise lock object
const lock = new Auth0Lock(
    "w72j6KObRRkXL889ivFXoroFVyoxGq1H",
    "richienb.au.auth0.com", {
        theme: {
            logo: "images/manifest/icon-72x72.png",
            primaryColor: "#F44336",
            foregroundColor: "#212121",
        },
        languageDictionary: {
            title: "Richie Bendall's Website",
        },
    }
)

// If authentication information exists
if (JSON.parse(localStorage.getItem("profile")) && localStorage.getItem("token")) {
    // Hide the login button
    $(".sso__login").hide()

    // Show the logout button
    $(".sso__logout").show()
} else {
    // Hide the logout button
    $(".sso__logout").hide()
}

// Listen for the authenticated event
lock.on("authenticated", ({
    accessToken,
}) => {
    // Use the token in authResult to getUserInfo() and save it to localStorage
    lock.getUserInfo(accessToken, (error, profile) => {
        // If an error occurred, terminate the function
        if (error) return

        // Save the user token
        localStorage.setItem("token", accessToken)

        // Save the user profile
        localStorage.setItem("profile", JSON.stringify(profile))

        // Hide the login button
        $(".sso__login").hide()

        // Show the logout button
        $(".sso__logout").show()
    })
})

// When the login button is clicked
$(".sso__login").click((e) => {
    // Prevent hash changes
    e.preventDefault()

    // Show the lock UI
    lock.show()
})

// When the logout button is clicked
$(".sso__logout").click((e) => {
    // Prevent hash changes
    e.preventDefault()

    // Remove the profile information
    localStorage.removeItem("profile")

    // Remove the token information
    localStorage.removeItem("token")

    // Hide the logout button
    $(".sso__logout").hide()

    // Show the login button
    $(".sso__login").show()
})

// Import html5shiv printshiv
import "html5shiv/dist/html5shiv-printshiv"
