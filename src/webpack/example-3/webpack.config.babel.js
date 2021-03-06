import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

export default {
    debug: true,
    devtool: 'eval-source-map',
    entry: {
        vendors: ['jquery'],
        nst: ['./src/assets/scripts/native-slide-toggle'],
        app: ['./src/assets/scripts/index']
    },
    target: 'web',
    output: {
        path: url('dist'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './src',
        noInfo: true,
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),

        new HtmlWebpackPlugin({
            template: url('src/index.html'),
            hash: true,
            //filename: 'index.html',
            environment: process.env.NODE_ENV
        }),

        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),

      //  new CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
    ],
    module: {
        loaders: [{
            test: /(\.js$|\.es6$)/,
            include: [url('src/assets')],
            loaders: ['babel']
        }, {
            test: /\.scss$/,
            include: url('src/assets/styles'),
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 5 versions!sass'),
        }, {
            test: /\.css$/,
            include: url('node_modules/normalize.css'),
            loader: ExtractTextPlugin.extract('style', 'css'),
        }, {
            test: /\.ico$/,
            include: url('src/assets/images'),
            loader: 'file?name=favicon.ico&context=/',
        }, {
            test: /\.(jpg|png|svg)$/,
            include: url('src/assets/images'),
            loader: 'url?limit=10000',
        }]
    },
    resolve: {
        extensions: ['', '.es6', '.js']
    },
    externals: {}
};


function url(filepath) {
    return path.join(__dirname, filepath || '');
}