path = require('path');

module.exports = {
    entry: [
        './browser.js'
    ],
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }]
    }
};