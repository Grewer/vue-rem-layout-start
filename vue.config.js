module.exports = {
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: (loader) => [
                    require('postcss-px2rem')({remUnit: 75}),
                ]
            }
        }
    }
}