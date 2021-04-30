const path = require("path");
const babel = require("./babel.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		"app": `${__dirname}/src/app.js`,
		"member": `${__dirname}/src/@member/app.js`,
	},

	output: {
		path: path.join(__dirname, "dist"),
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
			"actions": `${__dirname}/src/@member/actions`,
			"@member": `${__dirname}/src/@member/`,
			"pages": `${__dirname}/src/@member/pages`,
			"mock": `${__dirname}/src/@member/mock`,
			"assets": `${__dirname}/src/@member/assets`,
			"components": `${__dirname}/src/@member/components`,
			"compositions": `${__dirname}/src/@member/compositions`,
			"e2e": `${__dirname}/src/@member/e2e`,
			"containers": `${__dirname}/src/@member/containers`,
			"reducers": `${__dirname}/src/@member/reducers`,
			"selectors": `${__dirname}/src/@member/selectors`,
			"store": `${__dirname}/src/@member/store`,
			"modules": `${__dirname}/src/@member/modules`,
			"hooks": `${__dirname}/src/@member/hooks`,
			"styles": `${__dirname}/src/@member/styles`,
			"helpers": `${__dirname}/src/@member/helpers`,
			"validation": `${__dirname}/src/@member/validation`,
			"api": `${__dirname}/src/api`,
			"Request": `${__dirname}/src/Request`,
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
	  	new HtmlWebpackPlugin(), // Generates default index.html

	    new HtmlWebpackPlugin({
	      filename: process.env.NODE_ENV === "development" ? "login" : "login.html",
		  template: path.resolve(__dirname, "./src/login.html"),
	    }),

			new HtmlWebpackPlugin({
				filename: process.env.NODE_ENV === "development" ? "member" : "member.html",
				template: path.resolve(__dirname, "./src/@member/pages/Main/member.html"),
			}),
	    new HtmlWebpackPlugin({
		  filename: process.env.NODE_ENV === "development" ? "catalog" : "catalog.html",
		  template: path.resolve(__dirname, "./src/@member/pages/Catalog/catalog.html"),
	      chunks: ["member"],
	    }),
	     new HtmlWebpackPlugin({
		  filename: process.env.NODE_ENV === "development" ? "product" : "product.html",
		  template: path.resolve(__dirname, "./src/@member/pages/Product/product.html"),
		  chunks: ["member"],
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
				type: "asset/inline",
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
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
