const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // For React JSX
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],
                            ['@babel/preset-react', { runtime: 'automatic' }], // Enable new JSX transform
                        ],
                    },
                },
            },
            {
                test: /\.vue$/, // For Vue single-file components
                loader: 'vue-loader',
            },
            {
                test: /\.css$/, // For CSS
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
            vue$: path.resolve('./node_modules/vue'),
        },
        extensions: ['.js', '.jsx', '.vue', '.css'], // Extensions to resolve
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML template
        }),
        new VueLoaderPlugin(), // Vue loader plugin

        new webpack.HotModuleReplacementPlugin(), // Explicitly add HMR support
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../related_items_component/related_items/data/data.json'),
                    to: 'data' 
                },
                {
                    from: path.resolve(__dirname, '../product_component/e-commerce/data/product.json'),
                    to: 'data' 
                },
            ]
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    stats: {
        errorDetails: true,
    },
};
