const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dst")
    },
    module: {
        rules: [{
            //로더가 처리해야 할 파일명 패턴
            test: /\.js$/,
            use: [
                path.resolve('./my-webpack-loader.js')
            ]
        }]
    }
}