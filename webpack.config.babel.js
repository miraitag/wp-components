import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import postcssPresetEnv from 'postcss-preset-env'
import { plugins } from './src/plugins/index'
//import fs from 'fs'

export default (env, argv) => {
	//console.log(`El modo es ${argv.mode} y es verdero? ${ argv.mode === 'development'}`)
	return {
		watch: true,
		entry: {
			/* 'cbx-components': ['core-js/modules/es6.promise','core-js/modules/es6.array.iterator','./src/components.js'] */
			'cbx-components': ['./src/components.js']
		},
		output: {
			path: `${__dirname}/dist/`,
			filename: '[name].bundle.js',
			publicPath: '/assets/'
		},
		module: {
			rules: [{
				test: /\.pug$/,
				use: ['html-loader?atrr=false', 'pug-html-loader']
				/* use: [{
					loader: 'html-loader?attr=false&minimize=false',
					query: {
						minimize: false
					}
					
				}, {
					loader: 'pug-html-loader',
				}] */
			}, {
				test: /\.js$/,
				exclude: `${__dirname}/node_modules`,
				loader: 'babel-loader'
			}, {
				test: /\.pcss$/,
				use: [
					argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							parser: 'postcss',
							plugins: () => [
								require('postcss-import')(),
								require('postcss-mixins')(),
								require('postcss-conditionals')(),
								require('postcss-calc')({
									precision: 2
								}),
								/* require('postcss-media-variables')(), */
								//require('postcss-css-variables')(),
								require('postcss-nested-props')(),
								postcssPresetEnv({
									stage: 1,
									features: {
										'nesting-rules': true,
										'custom-media-queries': true,
										'custom-properties': true,
										':not-pseudo-class': true,
										':matches-pseudo-class': true,
										'media-query-ranges': true
									},
									browsers: 'IE 11',
									autoprefixer: {
										grid: true
									}
								}),
								require('cssnano')()
								/* require('postcss-advanced-variables')(), */
								/* require('postcss-simple-vars')(), */
								/* require('postcss-at-rules-variables')(), */
							]
						}
					}
				]
			}]
		},
		plugins: plugins(env, argv)
	}
}