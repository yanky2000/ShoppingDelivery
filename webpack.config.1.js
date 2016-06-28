let path = require('path');

module.exports = {
    context: path.resolve('dev/app'),
        entry: "./test",
    output: {
        path: __dirname + '/public/js',
        // path:'public',
        // publicPath: 'public/app',
        filename: "bundle.js"
    },

    devServer: {
        contentBase: 'public',
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
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"

            }
        ]
    }, 


    resolve: {
        extensions: ['', '.js']
    }


}