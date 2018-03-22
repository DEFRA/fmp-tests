var data = require('./data')
var homeTests = require('../../assertions/home')
var confirmlocationTests = require('../../assertions/confirmlocation')

module.exports = {
  'happy-path-pdf': function (client) {
    // Loop over each postcode
    data.pdfpostcode.forEach(function (item) {
      var location = item.location
      var homePage = client.page.home()

  // Navigate to the home page & submit postcode

      homeTests.confirm(homePage.load())
      homePage.click('@postcoderadio')
      homePage.setPostcodeAndSubmit(location)

  /**
  * Create confirm-location page object
  */
      var confirmlocationPage = client.page.confirmlocation()

  // Submit the search
      confirmlocationTests.confirm(confirmlocationPage)
      // confirmlocationTests.CheckResponseCode(client)
      confirmlocationPage.click('@printpdfbtn')
      confirmlocationTests.pdfpopup(confirmlocationPage)
      client.pause(2000)
    })
    client.end()
  }
}
