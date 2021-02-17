const webpackConfig = require("./webpack.config");
const webpack = require('webpack')
const { merge } = require('webpack-merge');

module.exports = merge(webpackConfig, {

	watchOptions: {
		ignored: /node_modules/,
		poll: 1000 // Check for changes every second
	},

	devServer: {
		historyApiFallback: true,
		contentBase: './dist',
		open: true,
		compress: true,
		hot: true,
		port: 9000,
	},
	plugins: [
		// ...
		// применять изменения только при горячей перезагрузке
		new webpack.HotModuleReplacementPlugin(),
	],

	devtool: "source-map",

	mode: "development",

});
