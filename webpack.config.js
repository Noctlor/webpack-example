const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { IgnorePlugin } = require('webpack');
const CopyPlugin  = require("copy-webpack-plugin");    



module.exports = {
    mode : "development",

    module: {
        rules: [
            {
                test : /\.html$/,
                loader: "html-loader",
                options:{
                    sources: false
                }
            },
            {
                test : /\.css$/,
                exclude : /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test : /styles.css$/,
                use: [MiniCssExtractPlugin.loader,"css-loader"]

            },
            {
                test : /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization : {},

    plugins: [
        new HtmlWebPackPlugin({
            template :'./src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/Assets/', to: 'Assets/' }
            ]

        })

    ],
}