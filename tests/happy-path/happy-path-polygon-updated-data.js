var data = require('./data')
var homeTests = require('../../assertions/home')
var confirmlocationTests = require('../../assertions/confirmlocation')
var summaryTests = require('../../assertions/summary')

module.exports = {
  '@tags': ['polygon-updated-data', 'polygon'],
  'happy-path-pin-updated-data': function (client) {
    // Loop over each place
    data.updateddata.forEach(function (item) {
      var location = item.location
      var point1 = item.point1
      var point2 = item.point2
      // commented the below out as they where not being used, need to understand what they are doing before bringing them back in
      // var point3 = item.point3
      // var point4 = item.point4
      // var floodzone = item.floodzone
      var en = item.en

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
      confirmlocationPage.moveToElement('.ol-attribution > button:nth-child(2)', point1, point2)
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
