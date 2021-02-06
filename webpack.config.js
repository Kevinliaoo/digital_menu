const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        filename: 'app.bundle.js'
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }), 
        new MiniCssExtractPlugin({
            filename: './[name].css'
        })
    ], 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
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
            }
        ]
    }
}