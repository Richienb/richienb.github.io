const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
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
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new UglifyJsPlugin()]
}
