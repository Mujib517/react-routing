module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/'
    },
    module:{
        loaders:[{test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'}]
    }
}