import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const filename = {
	atoms: 'components/atoms',
	molecules: 'components/molecules',
	containers: 'components/containers',
}

const template = {
	atoms: 'src/components/atoms',
	molecules: 'src/components/molecules',
	containers: 'src/components/containers'
}

export const plugins = [
	new MiniCssExtractPlugin({
		filename: "[name].css",
		chunkFilename: "[id].css"
	}),
	new HtmlWebpackPlugin({
		filename: `${filename.atoms}/cbx-bullet-list/index.html`,
		template: `${template.atoms}/cbx-bullet-list/index.pug`,
		inject: false
	}),
	new HtmlWebpackPlugin({
		filename: `${filename.atoms}/cbx-button/index.html`,
		template: `${template.atoms}/cbx-button/index.pug`,
		inject: false
	}),
	new HtmlWebpackPlugin({
		filename: `${filename.atoms}/cbx-button-boolean/index.html`,
		template: `${template.atoms}/cbx-button-boolean/index.pug`,
		inject: false
	})
]