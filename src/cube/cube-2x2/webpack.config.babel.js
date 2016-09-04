//import webpack from 'webpack';

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
        loaders: [{
                test: /(\.js$|\.es6$)/,
                include: [url('src/assets')],
                loaders: ['babel']
            }, {
                test: /\.scss$/,
                include: url('src/assets/styles'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader'),
            }, {
                test: /\.css$/,
                include: url('node_modules/normalize.css'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            }, {
                test: /\.ico$/,
                include: url('src/assets/images'),
                loader: 'file-loader?name=favicon.ico&context=/',
            }, {
                test: /\.(jpg|png|svg)$/,
                include: url('src/assets/images'),
                loader: 'url-loader?limit=10000',
            }
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


function getPath(relativePath) {
    return path.join(__dirname, relativePath);
}