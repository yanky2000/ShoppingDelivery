var path = require('path');


module.exports = {
    context: path.resolve(__dirname, 'dev/app'),
    entry: './index',

    output: {
        path: path.resolve(__dirname, 'build/js'),
        publicPath: '/assets/js/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'build/',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel?presets[]=es2015"
            },
            // {
            //     test: /\.html$/,
            //     exclude: /node_modules/,
            //     loader: "raw-loader"
            // },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            },
            {
                test: /\.jade$/,
                exclude: /node_modules/,
                loader: "jade"
            },
        ]
    },


    resolve: {
        extensions: ['', '.js']
    }


}