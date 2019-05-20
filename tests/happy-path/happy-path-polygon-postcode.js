var data = require('./data')
var homeTests = require('../../assertions/home')
var confirmlocationTests = require('../../assertions/confirmlocation')
var summaryTests = require('../../assertions/summary')

module.exports = {
  '@tags': ['polygon-postcode'],
  'happy-path-polygon-postcode': function (client) {
    // Tests postcode search and polygon functionality
    // Loop over each postcode
    data.polygonpostcode.forEach(function (item) {
      var location = item.location
      var en = item.en
      var firstpoint1 = item.firstpoint1
      var firstpoint2 = item.firstpoint2
      var secondpoint1 = item.secondpoint1
      var secondpoint2 = item.secondpoint2
      var thirdpoint1 = item.thirdpoint1
      var thirdpoint2 = item.thirdpoint2

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
      confirmlocationTests.url(confirmlocationPage, en)
      confirmlocationTests.confirm(confirmlocationPage)
      confirmlocationPage.click('@howtodraw')
      confirmlocationTests.instructions(confirmlocationPage)
      confirmlocationPage.toggledraw()
      confirmlocationPage.moveToElement('.ol-attribution > button:nth-child(2)', firstpoint1, firstpoint2)
      client.pause(1000)
      client.mouseButtonClick()
      confirmlocationPage.moveToElement('.ol-attribution > button:nth-child(2)', secondpoint1, secondpoint2)
      client.pause(1000)
      client.mouseButtonClick()
      confirmlocationPage.moveToElement('.ol-attribution > button:nth-child(2)', thirdpoint1, thirdpoint2)
      client.pause(1000)
      client.mouseButtonClick()
      confirmlocationPage.moveToElement('.ol-attribution > button:nth-child(2)', firstpoint1, firstpoint2)
      client.pause(1000)
      client.mouseButtonClick()
      client.pause(1000)
      confirmlocationPage.submit()

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
  }
}
