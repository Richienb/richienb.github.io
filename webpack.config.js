const {
    InjectManifest,
} = require("workbox-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                        sassOptions: {
                            indentedSyntax: true,
                            includePaths: ["./node_modules"],
                        },
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
                ".github/**/*",
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}
