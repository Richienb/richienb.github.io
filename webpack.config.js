const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/assets/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
