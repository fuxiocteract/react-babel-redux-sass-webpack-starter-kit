'use strict'

var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://localhost:8080',
	 	path.resolve(__dirname, 'src/app.js')
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/
			},
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
