/**
 * Created by Dylanwoo on 2017/11/8.
 */
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname+"/app/main.js",
    output: {
        path: __dirname+"/public",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use:
                    { loader: "babel-loader" },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 8081,
        inline:true,
        historyApiFallback: true,
        contentBase: "./public"
    }
};
