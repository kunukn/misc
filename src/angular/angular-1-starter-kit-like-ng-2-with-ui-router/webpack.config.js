'use strict';

var PROD = JSON.parse(process.env.PROD_ENV || '0');

var path = require("path"),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    nodeExternals = require('webpack-node-externals');

module.exports = {

    cache: true,

    // Uptimize bundle time by only looking at the needed folders
    // target: 'node', // important in order not to bundle built-in modules like path, fs, etc. 
    // externals: [nodeExternals({        
    //     whitelist: [/^webpack*/, 'jquery', /^angular*/, /^webpack*/]
    // })],

    // context: __dirname + '/app',

    entry: {
        app: './app/core/bootstrap.ts',
        'vendorjs': ['jquery', 'angular', 'angular-ui-router', 'bootstrap-loader' ],
    },

    output: {
        devtoolLineToLine: true,
        sourceMapFilename: './bundle.js.map',
        path: __dirname + '/build',
        //publicPath: '/',
        pathinfo: true,
        filename: 'app.bundle.js'
    },

    devtool: 'eval', //'source-map', //'eval', //
    // devServer: {
    //     colors: true,
    //     historyApiFallback: true,
    //     inline: true,
    //     hot: true,
    //     //contentBase: './public'
    // },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    resolveLoader: { root: path.join(__dirname, 'node_modules') },

    module: {

        // preloaders: [{
        //     test: /\.ts$/,
        //     loader: 'tslint'
        // }],

        loaders: [{
            test: /\.html$/,
            loader: 'raw',
            include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "build")]
        }, {
            test: /\.ts$/,
            loader: 'ts',
            include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "build")]
        }, {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass',
            include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "build")]
        }, {
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports?jQuery=jquery',            
            cacheDirectory: true
        }, {
            test: /\.(woff2?|svg)$/,
            loader: 'url?limit=10000',            
            cacheDirectory: true
        }, {
            test: /\.(ttf|eot)$/,
            loader: 'file',            
            cacheDirectory: true
        }, ]
    },

    postcss: function() {
        return [autoprefixer];
    },

    node: {
        fs: "empty"
    },

    plugins: [

        new HtmlWebpackPlugin({
            title: 'Application Framework',
            filename: './index.html',
            template: './app/index.html',
            inject: false
        }),

        new webpack.ProvidePlugin({
            jQuery: "jquery"
        }),

        new ngAnnotatePlugin({
            add: true
        }),

        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendorjs", /* filename= */"vendor.bundle.js", Infinity) // https://github.com/webpack/webpack/issues/368

        // ,
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false,
        //     minimize: true,
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};
