module.exports = {
    plugins: {
        "postcss-preset-env": {
            stage: 0
        },
        cssnano: {
            preset: ['advanced', {
                autoprefixer: {
                    add: false
                }
            }]
        }
    }
};
