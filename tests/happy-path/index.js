var data = require('./data')
var homeTests = require('../../assertions/home')
var confirmlocationTests = require('../../assertions/confirmlocation')
var summaryTests = require('../../assertions/summary')

module.exports = {
  'happy-path': function (client) {
    // Loop over each postcode
    data.forEach(function (item) {
      var location = item.location

      var homePage = client.page.home()

      // Navigate to the home page & submit postcode

      homeTests.confirm(homePage.load())
      homePage.setPostcodeAndSubmit(location)

      /**
      * Create confirm-location page object
      */
      var confirmlocationPage = client.page.confirmlocation()

      // Test confirm-location map fullscreen

      client.pause(2000)  // added to counter timeout issues

      confirmlocationPage.enterFullscreen()

      confirmlocationPage.waitForElementVisible('#confirm-location-page.fullscreen', 10000)  // added to counter timeout issues

      confirmlocationTests.assertFullscreen(confirmlocationPage, true)

      confirmlocationPage.exitFullscreen()

      confirmlocationTests.assertFullscreen(confirmlocationPage, false)

      // Submit the search
      confirmlocationTests.url(confirmlocationPage, location)
      confirmlocationTests.confirm(confirmlocationPage)
      confirmlocationPage.submit()

      /**
      * Create summary page object
      */
      var summaryPage = client.page.summary()

      // Test summary map fullscreen

      summaryPage.enterfullscreen()

      summaryPage.waitForElementVisible('#summary-page.fullscreen', 10000)  // added to counter timeout issues

      summaryTests.assertfullscreen(summaryPage, true)

      summaryPage.exitfullscreen()

      summaryTests.assertfullscreen(summaryPage, false)

      /**
      * Confirm correct Flood Zone Info
      */
      summaryTests.confirm(summaryPage, item)
    })
    client.end()
  }}
