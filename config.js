module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/**/*',
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/]
}