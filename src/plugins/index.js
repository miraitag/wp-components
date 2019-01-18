import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const atoms = [
	'bullet-list',
	'button',
	'button-boolean'
]

const plugins = [
	new MiniCssExtractPlugin({
		filename: "[name].css",
		chunkFilename: "[id].css"
	})
]

function readAtoms(){
	for(let i=0; i<atoms; i++){
		console.log(atoms[i]);
		plugins.push(
			new HtmlWebpackPlugin({
				filename: `components/atoms/cbx-${atoms[i]}/index.html`,
				template: `src/components/atoms/cbx-${atoms[i]}/index.pug`,
				inject: false
			})
		);
	}
}

readAtoms();

export { plugins }; 

	/* new HtmlWebpackPlugin({
		filename: 'components/atoms/cbx-bullet-list/index.html',
		template: 'src/components/atoms/cbx-bullet-list/index.pug',
		inject: false
	}) */