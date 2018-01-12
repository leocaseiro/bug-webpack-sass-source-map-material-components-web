const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDebug = true;

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.min.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './'
    },
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDebug,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDebug,
                            includePaths: [
                                glob.sync('node_modules').map((d) => path.join(__dirname, d)),
                            ]
                        },
                    }
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.min.css'),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin('./dist')
    ]
}
