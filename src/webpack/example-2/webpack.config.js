var path = require('path'),
    webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    context: path.resolve('src'),
    entry: {
        normalize: ['./assets/scripts/styles/normalizecss'],
        vendors: ['jquery', 'knockout', './assets/scripts/library/knockout-extra'],
        lazyLoaded: ['fastclick', './assets/scripts/library/fastclick-init'],
        //lazyLoaded: ['velocity-animate', 'velocity-ui-pack', 'fastclick', './assets/scripts/library/fastclick-init'],
        //app: ['webpack-dev-server/client?http://localhost:8080/', './assets/scripts/app'],
        app: ['./assets/scripts/app'],
    },
    output: {
        path: path.resolve('dist/assets/'),
        publicPath: '/assets/',
        filename: '[name].bundle.js',
    },
    devServer: {
        contentBase: './public',
        noInfo: true,
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jQuery',
            'windows.jQuery': 'jquery'
        }),

        new CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),

        new CommonsChunkPlugin({
            name: 'lazyLoaded',
            chunks: ['lazyLoaded'],
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            template: '../public/index.html'
                //   template: '../index.html'

        })
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            include: getPath('src/assets/scrips'),
            loader: 'jshint-loader',
        }],
        loaders: [{
            /* Enable jQuery to the window object */
            test: require.resolve('jquery'),
            include: getPath('node_modules'),
            loader: 'expose?jQuery!expose?$',
        }, {
            test: /\.es6$/,
            //exclude: /node_modules/,
            include: getPath('src/assets/scrips'),
            loader: 'babel-loader',
        }, {
            test: /\.scss$/,
            //exclude: /node_modules/,
            include: getPath('src/assets/styles'),
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader'),
        }, {
            test: /\.css$/,
            include: getPath('node_modules/normalize.css'),
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.(png|svg)$/,
            include: getPath('src/assets/images'),
            loader: 'url-loader?limit=10000',
        }]
    },
    resolve: {
        extensions: ['', '.es6', '.js', '.ts']
    }
}


function getPath(relativePath) {
    return path.join(__dirname, relativePath);
}
