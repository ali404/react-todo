const path = require('path')
// const merge = require('webpack-merge')
const webpack = require('webpack')
//
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
//
// const TARGET = process.env.npm_lifecycle_event
// process.env.BABEL_ENV = TARGET
//
const PATHS = {
    app: path.join(__dirname, 'src/app.js'),
    js: path.join(__dirname, 'src/js'),
    css: path.join(__dirname, 'src/css'),
    build: path.join(__dirname, 'build')
}
//
// const cssLoaders = ['css-loader', 'postcss-loader']
// const sassLoaders = ['sass-loader?indentedSyntax=sass&includePaths=[]' + path.resolve(__dirname, './build')]
//
// const common = {
//     entry: {
//         app: PATHS.app
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     },
//     output: {
//         path: PATHS.build,
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.sass$/,
//                 loader: ExtractTextPlugin.extract('style-loader', cssLoaders.concat(sassLoaders).join('!')),
//             },
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loaders: ['babel?cacheDirectory']
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin('build/style.css', {
//             allChunks: true
//         })
//     ]
// }
//
// if(TARGET === 'start' || !TARGET) {
//     module.exports = merge(common, {
//         devtool: 'source-map',
        // devServer: {
        //     contentBase: PATHS.build,
        //     historyAPIFallback: true,
        //     hot: true,
        //     inline: true,
        //     progress: true,
        //
        //     stats: 'errors-only',
        //
        //     host: process.env.HOST,
        //     port: process.env.PORT
        // },
        // plugins: [
        //     new webpack.HotModuleReplacementPlugin()
        // ]
//     })
// }
//
// if(TARGET === 'build') {
//     module.exports = merge(common, {})
// }

const ExtractTextPlugin = require('extract-text-webpack-plugin')

function getDevTool() {
    if(process.env.NODE_ENV !== 'production') {
        return 'eval-source-map'
    }

    return false
}

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: getDevTool(),
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot'
            },
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: PATHS.build,
        historyAPIFallback: true,
        hot: true,
        inline: true,
        progress: true,

        stats: 'errors-only',

        host: process.env.HOST,
        port: process.env.PORT
    }
}
