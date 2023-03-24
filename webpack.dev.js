const { merge } = require("webpack-merge");

const commonConf = require("./webpack.common");

module.exports = merge(commonConf, {
    mode: "development",
    devServer: {
        static: "./dist",
        port: 3969,
        https: true
    }
});

