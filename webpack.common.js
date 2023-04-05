const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Webpack = require("webpack");

/**
 * Configuration object of Webpack.
 * 
 * @type {Webpack.Configuration}
 */
const wpConfig = {
    entry: "./src/index.ts",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: "ts-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require.resolve("sass")
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js"
        ],
        fallback: {
            URL: require.resolve("url-polyfill")
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Asserest schema documentation",
            showErrors: this.mode == "development",
            language: "en",
            template: path.resolve(__dirname, "template.html")
        })
    ]
};

module.exports = wpConfig;