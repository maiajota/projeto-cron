const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'development',
    watch: false,
    devtool: 'source-map',
    entry: {
        home: './src/pages/home/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(eot|woff(2)?|ttf|otf|svg)$/i,
                type: 'asset'
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.ico$/,
                use: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css'],
        alias: {
            'font-awesome-css': 'font-awesome/css/font-awesome.css',
            'jquery-ui-css': 'jquery-ui-dist/jquery-ui.min.css',
            'jquery-ui': 'jquery-ui-dist/jquery-ui',
            '@assets': path.resolve(__dirname, 'src/assets'),
            'components': path.resolve(__dirname, 'src/components'),
            'extensions': path.resolve(__dirname, 'src/extensions'),
            'helpers': path.resolve(__dirname, 'src/helpers'),
            'styles': path.resolve(__dirname, 'src/styles')
        }
    },
    output: {
        filename: '[name].entry.js',
        path: path.resolve(__dirname, 'wwwroot', 'dist'),
        library: ['projetoCron', '[name]'],
    }
};
