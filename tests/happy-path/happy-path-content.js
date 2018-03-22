var data = require('./data')
var homeTests = require('../../assertions/home')
var confirmlocationTests = require('../../assertions/confirmlocation')

module.exports = {
  'happy-path-copy': function (client) {
    // Loop over each postcode
    data.copypostcode.forEach(function (item) {
      var location = item.location
      var en = item.en
      var homePage = client.page.home()

      // Navigate to the home page & submit postcode

      homeTests.confirm(homePage.load())
      homeTests.assertcopy(homePage)
      homePage.click('@postcoderadio')
      homePage.setPostcodeAndSubmit(location)

      /**
      * Create confirm-location page object
      */
      var confirmlocationPage = client.page.confirmlocation()

      // Submit the search
      confirmlocationTests.url(confirmlocationPage, en)
      confirmlocationTests.confirm(confirmlocationPage)
      confirmlocationTests.assertcopy(confirmlocationPage)
      confirmlocationPage.click('@howtodraw')
      confirmlocationTests.instructions(confirmlocationPage)
    })
    client.end()
  }
}
