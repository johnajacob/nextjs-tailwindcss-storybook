const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withCSS = require('@zeit/next-css')

module.exports = withBundleAnalyzer(
  withCSS({
    exportPathMap() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' }
      }
    }
  })
)
