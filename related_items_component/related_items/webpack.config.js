const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'relatedItems',
            filename: 'remoteEntry.js',
            exposes: {
                './RelatedItems': './src/index.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}