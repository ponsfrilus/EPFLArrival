// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'EPFL Arrival Map')
      .assert.containsText('.tile-description', 'Official EPFL website')
      .assert.elementPresent('.home')
      .assert.elementPresent('.searchInput')
      .assert.elementPresent('.searchCategories')
      .assert.containsText('.check', 'All')
      .assert.containsText('.check-others', 'Others')
      .assert.containsText('.check-identity', 'Identity')
      .assert.containsText('.check-backup', 'Backup')
      .assert.containsText('.check-service', 'Service')
      .assert.containsText('.check-communication', 'Communication')
      .assert.elementPresent('.landing')
      .assert.elementPresent('.tile-title')
      .assert.containsText('footer', '— Proudly using vue.js based on an idea of nbo with help of EPFLDojo —')
      .assert.elementCount('img', 0)
      .end()
  }
}
