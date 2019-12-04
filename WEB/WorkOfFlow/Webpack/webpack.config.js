const path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:develop,
    entry:'./src/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:3000',
                pathRewrite:{'/api':''}
            },

        //钩子模拟数据

        // before(app){
        //     app.get('/api/user',(req,res) => {
        //         res.json({name:111})
        //     })
        // }
        },
        plugins:[
            new htmlWebpackPlugin({

            })
        ]
    }
}