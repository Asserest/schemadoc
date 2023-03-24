const path = require("path");
const Webpack = require("webpack");

/**
 * Configuration object of Webpack.
 * 
 * @type {Webpack.Configuration}
 */
const wpConfig = {
    entry: "./src/index.ts",
    devtool: "inline-source-map",
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
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js"
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    externals: {
        "React": "react",
        "ReactDOM": "react-dom"
    }
};

module.exports = wpConfig;