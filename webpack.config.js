module.exports = {  
    entry: './app/js/app.js',
    output: {
        filename: './dist/js/app-bundle.js'
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
    }
};