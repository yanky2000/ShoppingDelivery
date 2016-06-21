var path = require('path');

module.exports = {
    context: path.resolve('dev/app'),
    entry: "./test/app",
    output: {
        path: path.resolve('build/app'),
        publicPath: '/app',
        filename: "bundle.js"
    },

    devServer: {
        contentBase: 'dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel?presets[]=es2015"
            }
        ]
    }


}