var path = require('path'),
    webpack = require('webpack');

module.exports = {
    context: path.resolve('js'),
    entry: ['./index'],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: 'public'
    },

    plugins: [],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loaders: ['raw-loader'],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};
