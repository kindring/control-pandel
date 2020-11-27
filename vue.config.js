let path = require('path');

function resolve(dir) {
    console.log(dir);
    return path.join(__dirname, dir)
}
let c = {
    devServer: {
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 2233,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:2233',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }, // 设置代理
        before: app => {}

    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@components': resolve('src/components'),
                '@request': resolve('src/request'),
                '@': resolve('src')
            }
        },

    },
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //         .set('vue$', resolve('vue/dist/vue.esm.js'))
    //         .set('@*', resolve('./src'))
    //         .set('@request', resolve('./src/request'))
    // }
}

module.exports = c