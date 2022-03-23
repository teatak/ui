const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: true,
        })
    ],
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/transform-runtime',
                            ['import', { libraryName: 'antd', style: true }, 'antd'],
                            ['import', { libraryName: '@teatak/ui', style: true }, '@teatak/ui']
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader', options: {
                            postcssOptions: {
                                plugins: {
                                    'postcss-import': {},
                                    'postcss-nested': {},
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader', options: {
                            postcssOptions: {
                                plugins: {
                                    'postcss-import': {},
                                    'postcss-nested': {},
                                }
                            }
                        }
                    },
                    {
                        loader: "less-loader", options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        ]
    },
};

