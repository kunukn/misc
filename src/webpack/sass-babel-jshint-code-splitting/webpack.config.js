var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	context: path.resolve('assets'),
	entry: {
		app: ['./scripts/app'],
		vendors: ['jquery', 'knockout']
	},
	output: {
		path: path.resolve('public/assets/'),
		publicPath: '/public/assets/',
		filename: '[name].bundle.js',
        libraryTarget: 'var',
        library: 'App'
	},
		devServer: {
		contentBase: './public',
			noInfo: true, //  --no-info option
			//hot: true,
			//inline: true
		},
	 plugins: [
	   new ExtractTextPlugin('app.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jQuery",
            "windows.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity)
    ],
	module: {
		preLoaders: [
		{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}],
		loaders: [

		{ test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$' },
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},

			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader!sass-loader')
			}
		]
	},
	resolve:{
		extensions: ['', '.js', '.es6', '.ts']
	}
}