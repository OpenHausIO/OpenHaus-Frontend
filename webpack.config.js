const path = require('path');

const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        //print: './src/print.js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        },
        //extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        //template: './src/index.html', CUSTMOM OPTION
        compress: true,
        port: 9000,
        host: "0.0.0.0",
        watchContentBase: true, //??????
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: '[Development] - OpenHaus',
            hash: true,
            myPageHeader: 'Hello World my title',
            template: './src/index.html',
            //filename: './dist/index.html' //relative to root of the
            breakpoint: "md"
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [{
                // Adds CSS to the DOM by injecting a `<style>` tag
                loader: 'style-loader'
            },
            {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'css-loader'
            },
            {
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            },
            {
                // Loads a SASS/SCSS file and compiles it to CSS
                loader: 'sass-loader'
            }]
        }, {
            test: /\.(vue)$/,
            use: [{
                loader: 'vue-loader'
            }]
        }, {
            test: /\.css$/,
            use: [
                "vue-style-loader",
                {
                    loader: 'css-loader'
                }
            ]
        }]
    }
};


/*
var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('../package.json');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var path = require("path");

module.exports = {
    entry: {
        //vendor: Object.keys(package.dependencies),
        app: "./src/app.js",
        //settings: "./src/scripts/settings.js"
    },
    output: {
        path: path.join(__dirname, "../dist/"),
        filename: "[name].bundle.js",
    },
    watch: true,
    resolve: {
        extensions: [".js", ".ts"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        port: 9000
    },
    plugins: [
        /*new CommonsChunkPlugin({
            name: 'shared',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            //chunks: ['vendor', 'shared', 'app'],
            path: path.join(__dirname, "dist/"),
            filename: 'index.html'
        }),/*
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Settings',
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'settings'],
            path: path.join(__dirname, "../dist/"),
            filename: 'settings.html'
        })
    ]

}*/