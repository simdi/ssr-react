const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        // {
                        //     targets: {
                        //         browsers: ["last 2 versions"]
                        //     }
                        // }
                    ]
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
};