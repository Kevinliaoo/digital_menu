const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/',    // CDN de donde van a partir mis datos
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                }
            }, 
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                    }, 
                    'css-loader', 
                    'sass-loader'
                ]
            }, 
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000 
                    }
                }
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }), 
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }), 
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            // Archivo manifest que se crea dsps de correr npm run build:dll
            manifest: require('./modules-manifest.json')
        })
    ], 
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 0,
    //         name: 'commons'
    //     }
    // }
}