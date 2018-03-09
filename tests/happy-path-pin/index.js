var data = require('./data')
var homeTests = require('../../assertions/home')
var confirmlocationTests = require('../../assertions/confirmlocation')
var summaryTests = require('../../assertions/summary')

module.exports = {
  'happy-path-postcode': function (client) {
    // Loop over each postcode
    data.postcode.forEach(function (item) {
      var location = item.location
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
      confirmlocationPage.click('@howtodraw')
      confirmlocationTests.instructions(confirmlocationPage)
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
  },
  'happy-path-place': function (client) {
  // Loop over each place
    data.place.forEach(function (item) {
      var location = item.location
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

    // Test confirm-location map fullscreen

      client.pause(2000)  // added to counter timeout issues

      confirmlocationPage.enterFullscreen()

      confirmlocationPage.waitForElementVisible('#confirm-location-page.fullscreen', 10000)  // added to counter timeout issues

      confirmlocationTests.assertFullscreen(confirmlocationPage, true)

      confirmlocationPage.exitFullscreen()

      confirmlocationTests.assertFullscreen(confirmlocationPage, false)

    // Submit the search
      confirmlocationTests.url(confirmlocationPage, en)
      confirmlocationTests.confirm(confirmlocationPage)
      confirmlocationPage.submit()

    /**
    * Create summary page object
    */
      var summaryPage = client.page.summary()

    // Test summary map fullscreen

      // need to pause for map layers to load before full screen functionality works
      // ideally need a callback from map to confirm loading successful
      client.pause(3000)

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
  },
  'happy-path-ngr': function (client) {
  // Loop over each place
    data.ngr.forEach(function (item) {
      var location = item.location
      // var floodzone = item.floodzone
      var en = item.en

      var homePage = client.page.home()

    // Navigate to the home page & submit postcode

      homeTests.confirm(homePage.load())
      homePage.click('@ngrradio')
      homePage.setngrAndSubmit(location)

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
      confirmlocationTests.url(confirmlocationPage, en)
      confirmlocationTests.confirm(confirmlocationPage)
      confirmlocationPage.submit()

    /**
    * Create summary page object
    */
      var summaryPage = client.page.summary()

    // Test summary map fullscreen

      // need to pause for map layers to load before full screen functionality works
      // ideally need a callback from map to confirm loading successful
      client.pause(3000)

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
  },
  'happy-path-en': function (client) {
  // Loop over each Easting and Northing
    data.eandn.forEach(function (item) {
      var easting = item.easting
      var northing = item.northing
      // var floodzone = item.floodzone
      var en = item.en

      var homePage = client.page.home()

    // Navigate to the home page & submit postcode

      homeTests.confirm(homePage.load())
      homePage.click('@enradio')
      homePage.seteastingandnorthingAndSubmit(easting, northing)

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
      confirmlocationTests.url(confirmlocationPage, en)
      confirmlocationTests.confirm(confirmlocationPage)
      confirmlocationPage.submit()

    /**
    * Create summary page object
    */
      var summaryPage = client.page.summary()

    // Test summary map fullscreen

      // need to pause for map layers to load before full screen functionality works
      // ideally need a callback from map to confirm loading successful
      client.pause(3000)

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
  }
}
