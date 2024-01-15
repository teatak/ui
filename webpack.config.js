const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV || 'dev';
const package = require('./package.json');

module.exports = {
    entry: {
        console: './site/main.js'
    },
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'UI - TeaTak',
            hash: true,
            inject: false,
            publicPath: env == "dev" ? "" : "",
            filename: '../docs/index.html',
            template: 'site/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-react", {
                                    "runtime": "automatic",
                                    "importSource": "@emotion/react"
                                }
                            ],
                        ]
                    }
                }
            },
        ]
    },
};

