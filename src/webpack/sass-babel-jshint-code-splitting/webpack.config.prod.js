var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackStrip = require('strip-loader');


module.exports = {
    context: path.resolve('src'),
    entry: {
        app: ['./assets/scripts/app'],
        vendors: ['jquery', 'knockout']
    },
    output: {
        path: path.resolve('public/assets/'),
        publicPath: '/public/assets/',
        filename: '[name].bundle.js',
        libraryTarget: 'var',
        library: 'App'
    },
    devServer: {
        contentBase: './',
        noInfo: true,
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jQuery',
            'windows.jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, },
            output: { comments: false },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ],
    module: {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            include: getPath('src/assets/scrips'),
            loader: WebpackStrip.loader('debug', 'console.log')
        }, {
            test: /\.es6$/,
            //exclude: /node_modules/,
            include: getPath('src/assets/scrips'),
            loader: 'babel-loader',
        }, {
            test: /\.scss$/,
            //exclude: /node_modules/,
            include: getPath('src/assets/styles'),
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader'),
        }]
    },
    resolve: {
        extensions: ['', '.js', '.es6', '.ts']
    }
}


function getPath(relativePath) {
    return path.join(__dirname, relativePath);
}
