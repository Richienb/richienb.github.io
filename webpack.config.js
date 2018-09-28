var path = require('path');
const {InjectManifest} = require('workbox-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlMinifierPlugin = require('html-minifier-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.html$/,
                loaders: ['file-loader?name=[name].html', 'extract-loader', 'html-loader']
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlMinifierPlugin({
            // HTMLMinifier options
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeAttributeQuotes: true,
            removeComments: true
        }),
        new InjectManifest({
            "globDirectory": "dist/",
            "importWorkboxFrom": "cdn",
            "globPatterns": ["**/*.*"],
            "swSrc": "./src/service-worker.js",
            "swDest": "service-worker.js",
            "globIgnores": ["../workbox-config.js"]
        })
    ]
};
