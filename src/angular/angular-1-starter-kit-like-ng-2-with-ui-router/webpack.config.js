'use strict';

var PROD = JSON.parse(process.env.PROD_ENV || '0');

var path = require("path"),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    nodeExternals = require('webpack-node-externals')
    //,noopLoader = require('noop-loader')
;

module.exports = {

    cache: true,

    // Uptimize bundle time by only looking at the needed folders
    // target: 'node', // important in order not to bundle built-in modules like path, fs, etc. 
    // externals: [nodeExternals({        
    //     whitelist: [/^webpack*/, 'jquery', /^angular*/, /^webpack*/]
    // })],

    // context: __dirname + '/app',

    entry: {
        app: ['./app/core/bootstrap.ts', 'webpack/hot/only-dev-server'],
        vendorjs: ['jquery', 'angular', 'angular-ui-router'], // 'bootstrap-loader'
    },

    output: {
        devtoolLineToLine: true,
        sourceMapFilename: './bundle.js.map',
        path: __dirname + '/build',
        //publicPath: './app',
        pathinfo: true,
        filename: 'app.bundle.js'
    },

    devtool: 'eval', //'source-map', //'eval', //
    devServer: {
        //colors: true,
        //profile: true,
        //progress: true,
        //historyApiFallback: true,
        inline: true,
        //hot: true,
        contentBase: './app',
        headers: { "Access-Control-Allow-Origin": "*" }
    },

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
            },
            //  {
            //     test: /bootstrap-sass\/assets\/javascripts\//,
            //     loader: 'imports?jQuery=jquery',            
            //     cacheDirectory: true
            // },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url?limit=10000',
             //   cacheDirectory: true,
                include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "build")]
            }, {
                test: /\.(ttf|eot)$/,
                loader: 'file',
             //   cacheDirectory: true,
                include: [path.resolve(__dirname, "app"), path.resolve(__dirname, "build")]
            },
        ]
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

        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendorjs", /* filename= */ "vendor.bundle.js", Infinity) // https://github.com/webpack/webpack/issues/368

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


function getPath(relativePath) {
    return path.resolve(__dirname, relativePath);
}
