var webpack = require('webpack');
module.exports = {  
    entry: './app/js/app.js',
    devtool: 'source-map',
    output: {
        filename: './dist/js/app-bundle.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            { 
                test: /\.less$/, 
                loader: "style!css!less" 
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};