const webpack = require('webpack');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/seeker/'
        : '/',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                __TWITCH_CLIENT_ID__: JSON.stringify(process.env.TWITCH_CLIENT_ID)
            })
        ]
    }
};
