const path = require("path")
const {
    InjectManifest,
} = require("workbox-webpack-plugin")

function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
    // when the importer throws
    try {
        return require.resolve(url, {
            paths: [path.dirname(sourceFilename)],
        })
    } catch (e) {
        return ""
    }
}

function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith(".scss") ?
        url :
        `${url}.scss`
    return tryResolve_(normalizedUrl, sourceFilename) || tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`), sourceFilename)
}

function materialImporter(url, prev) {
    if (url.startsWith("@material")) {
        const resolved = tryResolveScss(url, prev)
        return {
            file: resolved || url,
        }
    }
    return {
        file: url,
    }
}

module.exports = {
    mode: "production",
    entry: [
        "./app.sass", "./app.js",
    ],
    output: {
        filename: "bundle.js",
        path: __dirname,
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "bundle.css",
                },
            }, {
                loader: "extract-loader",
            }, {
                loader: "css-loader",
            }, {
                loader: "postcss-loader",
            },
            {
                loader: "sass-loader",
                options: {
                    importer: materialImporter,
                },
            },
            ],
        }],
    },
    plugins: [
        new InjectManifest({
            globDirectory: ".",
            globPatterns: ["**/*.*"],
            importWorkboxFrom: "local",
            swSrc: "sw.js",
            swDest: "service-worker.js",
            globIgnores: [
                "node_modules/**/*",
                "+(workbox-|webpack.|postcss.)config.js",
                "app.+(js|sass)",
                "yarn.lock",
                "package.json",
                "_config.yml",
                "sw.js",
                "README.md",
                "pinterest-c16e1.html",
                "*.log",
                "README.md",
                "CNAME",
                ".travis.yml",
                ".gitignore",
                ".gitattributes",
                ".github/**/*"
            ],
        }),
    ],
}
