;
var path = require('path'),
    webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackStrip = require('strip-loader');

var ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
    devtool: 'eval',
    context: path.resolve('./'),
    entry: {
        vendors: ['jquery'],
        app: ['./src/assets/scripts'],
        //app: ['webpack-dev-server/client?http://localhost:8080/', './src/assets/scripts/app'],
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    /*
    htmlLoader: {
        minimize: false
    },
    */
    devServer: {
        contentBase: './',
        noInfo: true,
        port: 3333,
        //historyApiFallback: true,
        //stats: 'minimal'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jQuery',
            'windows.jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                'ENV': JSON.stringify(ENV)
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({ name: ['vendors'].reverse(), minChunks: Infinity }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            //hash: true,
        })
    ],
    module: {
        preLoaders: [            
        ],
        loaders: [{
                /* Enable to the window object */
                test: require.resolve('jquery'),
                include: getPath('node_modules'),
                loader: 'expose?jQuery!expose?$'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?minimize=true&removeComments=false&conservativeCollapse=true&collapseWhitespace=true"
            },
            {
                test: /\.js$/,
                //include: [getPath('src/assets/scrips')],
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            }, {
                test: /\.scss$/,
                //exclude: /node_modules/,
                include: [getPath('src/assets/styles')],
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 10 versions!sass-loader'),
            }, {
                test: /\.css$/,
                include: getPath('node_modules/normalize.css'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            }, {
                test: /\.ico$/,
                include: getPath('src/assets/images'),
                loader: 'file-loader?name=favicon.ico&context=/',
            }, {
                test: /\.(jpg|png|svg)$/,
                include: [getPath('src/assets/images')],
                loader: 'url-loader?limit=10000',
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    externals: {
        //"jquery": "$"
    },
};


function getPath(relativePath) {
    return path.join(__dirname, relativePath);
}