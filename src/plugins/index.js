import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'

const components = {
	atoms: {
		type: 'atoms',
		content: [
			'cbx-bullet-list',
			'cbx-button',
			'cbx-button-boolean'
		]
	},
	molecules: {
		type: 'molecules',
		content: [
			'cbx-apps'
		]
	}
}

let allPlugins = [];

function addPlugin(argv){
	allPlugins.push( 
		new MiniCssExtractPlugin({
			filename: argv.mode === 'production' ? '[name].min.css' : '[name].css',
			/* filename: '[name].css', */
			chunkFilename: "[id].css"
		}),
	)

	allPlugins.push( 
		new OptimizeCssAssetsPlugin({
			cssProcessor: require('cssnano')
		})
	)
	for( let cte in components ){
		console.log(components[cte]);
		for(let i=0; i<components[cte].content.length; i++){
			allPlugins.push( 
				new HtmlWebpackPlugin({
					filename: `components/${components[cte].type}/${components[cte].content[i]}/index.html`,
					template: `src/components/${components[cte].type}/${components[cte].content[i]}/index.pug`,
					inject: false
				}),
			)
		}
	}
	return allPlugins;
}

export function plugins(env, argv){
	return addPlugin(argv);
}