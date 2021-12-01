// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: true // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ng-test1'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      FirefoxSemCabeca: {
        base: 'Firefox',
        flags: ['-headless']
      },
      ChromeHeadless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', 'http://0.0.0.0:9876/']
      },
      Chrome_Beta_Headless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
      },
      ChromeHeadlessNoSandbox:{
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox",
          "--no-proxy-server",
          "--disable-web-security",
          "--disable-gpu",
          "--disable-dev-shm-usage",
          '--no-proxy-server',
          '--proxy-bypass-list=*',
          '--window-size=1920,1080',
          '--remote-debugging-port=9222'
        ]
      }
    }
  });
};
