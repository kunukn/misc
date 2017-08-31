var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {

    var nodeEnv = env.production === true
        ? 'production'
        : 'development';

    console.log(`------------ ${nodeEnv} ------------`);

    var plugins = [
        new ExtractTextPlugin('[name].css'), new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        }),
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ];

    return {
        devtool: 'source-map',
        context: path.resolve('./'),
        entry: {
            app: ['./src/index']
        },
        output: {
            path: path.resolve('dist'),
            publicPath: '',
            filename: '[name].bundle.js'
        },
        devServer: {
            openPage: 'index.html',
            //open: true, // auto open browser?
            contentBase: './',
            noInfo: true,
            port: 3456,
        },
        plugins: plugins,
        module: {
            rules: [
                {
                    test: /\.html$/,
                    exclude: [/node_modules/],
                    loader: "html-loader"
                }, {
                    test: /\.(js|jsx)$/,
                    exclude: [/node_modules/],
                    loaders: ['babel-loader']
                }, {
                    test: /\.scss$/,
                    exclude: [/node_modules/],
                    loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
                }, {
                    test: /\.css$/,
                    exclude: [/node_modules/],
                    loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        externals: {}
    }
};
