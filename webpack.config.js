const path = require("path");
const babel = require("./babel.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
	entry: {
		"app": `${__dirname}/src/app.js`,
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
			"actions": `${__dirname}/src/actions`,
			"mock": `${__dirname}/src/mock`,
			"assets": `${__dirname}/src/assets`,
			"components": `${__dirname}/src/components`,
			"compositions": `${__dirname}/src/compositions`,
			"e2e": `${__dirname}/src/e2e`,
			"containers": `${__dirname}/src/containers`,
			"reducers": `${__dirname}/src/reducers`,
			"selectors": `${__dirname}/src/selectors`,
			"store": `${__dirname}/src/store`,
			"modules": `${__dirname}/src/modules`,
			"hooks": `${__dirname}/src/hooks`,
			"styles": `${__dirname}/src/styles`,
			"helpers": `${__dirname}/src/helpers`,
			"validation": `${__dirname}/src/validation`,
			"api": `${__dirname}/src/api`,
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
		new HtmlWebpackPlugin({
			title: 'webpack Boilerplate',
			template: path.resolve(__dirname, './src/pages/user/Login/login.html'), // шаблон
			filename: 'index.html', // название выходного файла
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
