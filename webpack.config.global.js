const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const conf = {
        mode: "development",
        entry: {
            superlib: [`./src/index.js`],
        },
        devServer: {
            contentBase: path.join(__dirname, "client"),
            port: 3000,
            disableHostCheck: true,
        },
        // library building properties for (1-1)
        output: {
            path: path.join(__dirname, "client"),
            filename:
                argv.mode === "production"
                    ? `[name].min.js`
                    : `[name].develop.js`,
            library: "SuperLib",
            libraryExport: "default",
            libraryTarget: "global",
            globalObject: "this",
        },
        plugins: [
            new CopyPlugin({
                patterns: [{ from: "src/_wasm/module_test1.wasm", to: "" }],
            }),
            new webpack.IgnorePlugin(/(fs)/),
        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                    ],
                },
            ],
        },
    };

    if (argv.mode !== "production") {
        conf.devtool = "inline-source-map";
    }
    return conf;
};
