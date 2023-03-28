const { merge } = require("webpack-merge");

const commonConf = require("./webpack.common");

module.exports = merge(commonConf, {
    mode: "development",
    output: {
        publicPath: "/"
    }
});