const webpack = require('webpack');

const PROD = 'production';
const DEFAULT_REDIRECT = "http://localhost:8080";

let __TWITCH_CLIENT_ID__ = JSON.stringify(process.env.TWITCH_CLIENT_ID);
let __TWITCH_REDIRECT_URL__ = JSON.stringify(process.env.NODE_ENV === PROD ? process.env.TWITCH_REDIRECT_URL : DEFAULT_REDIRECT);

module.exports = {
    publicPath: process.env.NODE_ENV === PROD
        ? '/seeker/'
        : '/',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                __TWITCH_CLIENT_ID__,
                __TWITCH_REDIRECT_URL__
            })
        ]
    }
};
