var path = require('path')
//var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:[
		'babel-polyfill',
		'./src/index.js',
		'./src/index2.js',
		'./src/style.css',
		'./src/style.less',
		'./src/style.scss',
		
	],
	output:{
		path:path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				loaders:['style-loader','css-loader']
			},
			{
				test:/\.scss$/,
				loaders:['style-loader','css-loader','sass-loader']
			},
			{
				test:/\.less$/,
				loaders:['style-loader','css-loader','less-loader']
			},
			{
				test:/\.(jpg|png)$/,
				loaders:['url-loader']
			},
			{
                test:/\.js$/,
                exclude:/(node_modules)/,//排除掉node_module目录
                use:{
                    loader:'babel-loader',
                    options:{
						presets:['@babel/preset-env'], //转码规则
						plugins:["@babel/plugin-transform-runtime"]
                    }
                }
            }
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
		  template: './src/index.html'
		})
	]
}