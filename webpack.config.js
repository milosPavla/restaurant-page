const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
        home: path.resolve(__dirname, 'src/home.js'), 
        menu: path.resolve(__dirname, 'src/menu.js'),
        contact: path.resolve(__dirname, 'src/contact.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist/'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test:/\.(png|svg|jpg|gif|jpeg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Homepage',
            filename: 'home.html',
            template: 'src/home.html',
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            title: 'Menu',
            filename: 'menu.html',
            template: 'src/menu.html',
            chunks: ['menu'],
        }),
        new HtmlWebpackPlugin({
            title: 'Contact',
            filename: 'contact.html',
            template: 'src/contact.html',
            chunks: ['contact'],
        }),
    ],
}