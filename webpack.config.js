var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('index', './assets/js/index.js')
    .addEntry('login', './assets/js/login.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()

    .configureBabel(function (babelConfig) {
        babelConfig.plugins = [
            "@babel/plugin-proposal-object-rest-spread","@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
        ]
    })
;

module.exports = Encore.getWebpackConfig();