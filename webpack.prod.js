const { merge } = require("webpack-merge");

const commonConf = require("./webpack.common");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConf, {
    mode: "production",
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    output: {
        publicPath: "/"
    },
    plugins: [
        new TerserPlugin()
    ]
});
