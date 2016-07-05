var path = require('path'),
    webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    WebpackStrip = require('strip-loader');

module.exports = {
    context: path.resolve('src'),
    entry: {
        normalize: ['./assets/scripts/styles/normalizecss'],
        app: ['./assets/scripts/app'],
        vendors: ['jquery', 'knockout', './assets/scripts/library/knockout-extra'],
        lazyLoaded: ['fastclick', './assets/scripts/library/fastclick-init'],
        //lazyLoaded: ['velocity-animate', 'velocity-ui-pack', 'fastclick', './assets/scripts/library/fastclick-init'],
    },
    output: {
        path: path.resolve('dist/assets/'),
        publicPath: '/public/assets/',
        filename: '[name].bundle.js',
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


        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, },
            output: { comments: false },
            mangle: {
                except: ['$']
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: WebpackStrip.loader('console.debug', 'console.log', 'debug', 'log')
        }, {
            test: /\.es6$/,
            include: getPath('src/assets/scrips'),
            loader: 'babel-loader',
        }, {
            test: /\.scss$/,
            include: getPath('src/assets/styles'),
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader'),
        }, {
            test: /\.css$/,
            include: getPath('node_modules/normalize.css'),
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }]
    },
    resolve: {
        extensions: ['', '.es6', '.js', '.ts']
    }
}


function getPath(relativePath) {
    return path.join(__dirname, relativePath);
}
