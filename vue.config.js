module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/seeker/'
        : '/',
    productionSourceMap: false
};
