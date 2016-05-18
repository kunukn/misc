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

    // target: 'node', // important in order not to bundle built-in modules like path, fs, etc. 
    // externals: [nodeExternals({        
    //     whitelist: [/^webpack*/, 'jquery', /^angular*/, /^webpack*/]
    // })],

    // context: __dirname + '/app',

    entry: './app/core/bootstrap.ts',

    output: {
        devtoolLineToLine: true,
        sourceMapFilename: './bundle.js.map',
        path: __dirname + '/build',
        pathinfo: true,
        filename: 'bundle.js'
    },

    devtool: 'eval', //'source-map', //'eval', //

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
            include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "build")],
            cacheDirectory: true
        }, {
            test: /\.(woff2?|svg)$/,
            loader: 'url?limit=10000',
            include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "build")],
            cacheDirectory: true
        }, {
            test: /\.(ttf|eot)$/,
            loader: 'file',
            include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "build")],
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
        })

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
