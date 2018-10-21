const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
    // when the importer throws
    try {
        return require.resolve(url, {
            paths: [path.dirname(sourceFilename)]
        });
    } catch (e) {
        return '';
    }
}

function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith('.scss')
        ? url
        : `${url}.scss`;
    return tryResolve_(normalizedUrl, sourceFilename) || tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`), sourceFilename);
}

function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
        const resolved = tryResolveScss(url, prev);
        return {
            file: resolved || url
        };
    }
    return {file: url};
}

module.exports = {
    entry: [
        './app.scss', './app.js'
    ],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css'
                        }
                    }, {
                        loader: 'extract-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader',
                        options: {
                            importer: materialImporter
                        }
                    }
                ]
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env'],
                    plugins: ['transform-object-assign']
                }
            }
            // ,
            // {
            //     test: /\.html$/,
            //     loader: 'raw-loader!html-minifier-loader'
            // }
        ]
    },
    // 'html-minifier-loader': {
    //     collapseBooleanAttributes: true,
    //     collapseInlineTagWhitespace: true,
    //     collapseWhitespace: true,
    //     conservativeCollapse: true,
    //     decodeEntities: true,
    //     minifyCSS: true,
    //     minifyJS: true,
    //     minifyURLs: true,
    //     preserveLineBreaks: true,
    //     quoteCharacter: "\"",
    //     removeAttributeQuotes: true,
    //     removeComments: false,
    //     removeRedundantAttributes: true,
    //     removeScriptTypeAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     useShortDoctype: true
    // },
    plugins: [
        new ClosurePlugin({
            mode: 'STANDARD',
            // compilation_level: 'BUNDLE'
        }, {
            // compiler flags here
            //
            // for debuging help, try these:
            //
            // formatting: 'PRETTY_PRINT'
            // debug: true
            warning_level: 'QUIET'
        }),
        new workboxPlugin.InjectManifest({
            swSrc: 'sw.js',
            swDest: 'service-worker.js',
            importWorkboxFrom: 'cdn',
            globPatterns: ['index.html', 'bundle.css', 'bundle.js', 'error.html']
        })
    ]
};
