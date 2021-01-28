const path=require('path')
// 会默认生成它自己的 index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//  清理 /dist 文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

 module.exports={
     //   仅用于开发环境
     mode: 'development',
    entry:{  // 导入文件
        index:'./src/index.js',
        // print:'./src/print.js'
    },
     output: {//导出
                // [name] 就是动态的文字
         filename: "[name].bundle.js",
         path:path.resolve(__dirname,'dist'),
         // 确定中间件
         publicPath: '/'
     },
     // 追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置
     devtool: 'inline-source-map',
     //  将 dist 目录下的文件 serve 到 localhost:8080 下
     // web server 将在编译代码后自动重新加载
     devServer: {
         contentBase: './dist',
     },
     plugins: [
         //  --watch 不删除 index.html
         new CleanWebpackPlugin({
             cleanStaleWebpackAssets: false
         }),
         new HtmlWebpackPlugin({
             title: '管理输出',
         }),
     ],
     module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ]
     }
 }
