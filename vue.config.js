const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  outputDir: 'docs',
  publicPath: isDev ? '/' : '/v-fraction-calculator/',
  devServer: {
    host: 'localhost',
    port: '3000'
  },
  productionSourceMap: isDev
}