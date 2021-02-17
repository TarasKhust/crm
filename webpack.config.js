const path = require("path");
const babel = require("./babel.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
	entry: {
		"app": `${__dirname}/src/app.js`,
		"members": `${__dirname}/src/@members/app.js`
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].bundle.js",
		chunkFilename: "[name].bundle.js?[contenthash]",
	},

	resolve: {
		extensions: [
			".js",
			".jsx",
			".json",
		],
		alias: {
			"actions": `${__dirname}/src/@members/actions`,
			"@members": `${__dirname}/src/@members/`,
			"pages": `${__dirname}/src/@members/pages`,
			"mock": `${__dirname}/src/@members/mock`,
			"assets": `${__dirname}/src/@members/assets`,
			"components": `${__dirname}/src/@members/components`,
			"compositions": `${__dirname}/src/@members/compositions`,
			"e2e": `${__dirname}/src/@members/e2e`,
			"containers": `${__dirname}/src/@members/containers`,
			"reducers": `${__dirname}/src/@members/reducers`,
			"selectors": `${__dirname}/src/@members/selectors`,
			"store": `${__dirname}/src/@members/store`,
			"modules": `${__dirname}/src/@members/modules`,
			"hooks": `${__dirname}/src/@members/hooks`,
			"styles": `${__dirname}/src/@members/styles`,
			"helpers": `${__dirname}/src/@members/helpers`,
			"validation": `${__dirname}/src/@members/validation`,
			"api": `${__dirname}/src/@members/api`,
		},
		modules: [
			`${__dirname}/node_modules`,
		],
	},

	externals: {},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css?[contenthash:6]",
			chunkFilename: "[id].css?[contenthash:6]",
		}),
		new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'members',
			template: path.resolve(__dirname, './src/@members/pages/Main/main.html'), // шаблон
		}),
		new CleanWebpackPlugin(),
	],

	resolveLoader: {
		extensions: [".js", ".jsx", ".json"],
	},

	target: "web",

	module: {
		rules: [
			{
				test: /\.js$|\.jsx$/,
				include: [/src/, /node_modules\/(?=(swiper|dom7)\/).*/],
				exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /.test.js(x)?$/],
				use: {
					loader: "babel-loader",
					options: babel,
				},
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},

	optimization: {
		moduleIds: "deterministic",
		chunkIds: "named",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: "vendor",
					chunks: "all",
				},
				default: false,
				vendors: false,
			},
		},
	},
};
