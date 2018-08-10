# Create the packages yourself

## Setup
1. Install NodeJS
  [Visit Website](https://nodejs.org)

1. Install `nativefier`

  Using npm: `npm install -g nativefier`

  Using yarn: `yarn global install nativefier`

## Usage
Execute the following command:

`nativefier --platform win32 --arch x64 --app-copyright "Richie Bendall" --app-version "1.0.0" --conceal --icon icon.png --show-menu-bar --fast-quit --disable-dev-tools https://www.richie-bendall.ml`

Replace `OS` with the OS you want to use the app on: `win32`, `darwin` or `mac`

Replace `ARCH` with the Architeture you want to use the app on: `ia32`, `x64` or `armv7l`

Replace `ICON` with `icon.png` if you want to use the app on Linux or Windows and replace it with `icon.icns` if you want to use the app on MacOS

If the icon fails to set, remove `--icon ICON`
