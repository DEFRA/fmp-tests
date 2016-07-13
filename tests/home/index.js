var homeTests = require('../../assertions/home')

module.exports = {
  'happy-path': function (client) {
    var homePage = client.page.home()

    homeTests.confirm(homePage.load())

    client.end()
  }
}
