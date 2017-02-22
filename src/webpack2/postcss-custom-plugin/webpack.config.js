/* eslint-disable */

const webpack = require('webpack'),
    path = require('path'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {

    const isProd = env.production === true;
    const nodeEnv = isProd
        ? 'production'
        : 'development';

    console.log(nodeEnv);

    const plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: 'true',
            template: 'src/index.html',
            inject: 'head',
        }),
        new ExtractTextPlugin({ filename: '[name].bundle.css', allChunks: true })
    ];

    return {
        devtool: isProd ? 'source-map' : 'eval',
        context: path.resolve('./'),
        entry: {
            app: ['./src/index']
        },
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '',
            filename: '[name].bundle.js',
            chunkFilename: '[id].chunk.js',
        },
        devServer: {
            open: true,
            contentBase: './',
            noInfo: true,
            port: 3333,
            compress: isProd,
            inline: !isProd,
            //hot: !isProd,
        },
        plugins: plugins,
        module: {
            rules: [
                // {
                //     test: /\.js$/,
                //     loader: 'babel-loader',
                //     exclude: [/node_modules/]
                // },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader?importLoaders=1',
                        'postcss-loader'
                    ],
                    exclude: [/node_modules/],
                },
            ]
        },
        resolve: {
            extensions: ['.js']
        },
        externals: {}
    }
};

/* eslint-enable */