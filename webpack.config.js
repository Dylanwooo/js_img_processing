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
                test: /\css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
};