var path = require('path'),
    webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //context: path.resolve('src'),
    debug: true,
    devtool: 'eval-source-map',
    noInfo: false,
    entry: {
        app: [
            //'eventsource-polyfill', // necessary for hot reloading with IE
            //'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
            './src/assets/scripts/index.js'
        ]
    },
    target: 'web',
    output: {
        path: url('dist'), 
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        loaders: [
            { test: /(\.js$|\.es6$)/, include: [url('src/assets')], loaders: ['babel'] },
            { test: /(\.css)$/, include: [url('src/assets')], loaders: ['style', 'css'] },
            { test: /(\.scss)$/, include: [url('src/assets')], loaders: ['style', 'css', 'sass'] },
        ]
    },
    resolve: {
        extensions: ['', '.es6', '.js']
    },
    externals: {}
};

function url(filepath) {
    return path.join(__dirname, filepath || '');
}