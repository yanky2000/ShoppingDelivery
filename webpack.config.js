var path = require('path');

module.exports = {
    context: path.resolve('dev/app'),
        entry: ["./index"],
    output: {
        path: path.resolve('build/app'),
        publicPath: '/public/app',
        filename: "bundle.js"
    },

    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel?presets[]=es2015"
            }, 
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "raw-loader"
            }
        ]
    }, 

    resolve: {
        extensions: ['', '.js']
    }


}