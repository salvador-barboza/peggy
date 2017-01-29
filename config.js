module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/icons/**/*',
    '/manifest.json',
    '/bower_components/**/*',
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/]
}