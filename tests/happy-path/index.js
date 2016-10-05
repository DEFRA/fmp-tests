var data = require('./data')
var homeTests = require('../../assertions/home')
var ConfirmLocationTests = require('../../assertions/confirmlocation')
var summaryTests = require('../../assertions/summary')

module.exports = {
  'happy-path': function (client) {
    // Loop over each postcode
      data.forEach (function (item) {
      var location = item.location
      var floodzone = item.floodzone

      var homePage = client.page.home()

      // Navigate to the home page & submit postcode

      homeTests.confirm(homePage.load())
      homePage.setPostcodeAndSubmit(location)

      /**
      * Create confirm-location page object
      */
      var ConfirmLocationPage = client.page.confirmlocation()

      // Submit the search
      ConfirmLocationPage.submit()

      /**
      * Create summary page object
      */
      var summaryPage = client.page.summary()

      /**
      * Confirm correct Flood Zone Info
      */
      summaryTests.confirm(summaryPage, item)
})
    client.end()
}}
