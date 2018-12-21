import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import fs from 'fs'

export default (env, argv) => {
    //console.log(`El modo es ${argv.mode} y es verdero? ${ argv.mode === 'development'}`)
    return {
        watch: true,
        entry: {
            'cbx-components': './src/components.js'
        },
        output: {
            path: `${__dirname}/dist/`,
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                /*  {
                     test: /\.pug$/,
                     use: ['html-loader?attrs=false', 'pug-html-loader']
                 }, */
                {
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
                            loader: 'postcss-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    }
}