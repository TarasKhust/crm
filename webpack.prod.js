const webpackConfig = require("./webpack.config");
const { merge } = require('webpack-merge');

module.exports = merge(webpackConfig, {

	watch: false,

	devtool: false,

	mode: "production",

});
