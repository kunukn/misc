var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: [/node_modules/],
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            exclude: [/node_modules/],
            loader: 'html'

        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            exclude: [/node_modules/],
            loader: 'null'
        }, {
            test: /\.css$/,
            exclude: [/node_modules/, helpers.root('src', 'app')],
            loader: 'null'
        }, {
            test: /\.css$/,
            include: [helpers.root('src', 'app')],
            loader: 'raw'
        }]
    }
}