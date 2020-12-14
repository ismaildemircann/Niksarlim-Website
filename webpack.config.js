const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './src/aboutUs.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            template: './src/products.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: './src/product.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'source-map'
}; 