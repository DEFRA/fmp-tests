var locations = require('./data.js')
var homeTests = require('../../assertions/home')
var homeerrorTests = require('../../assertions/homeerror')
var nonenglishTests = require('../../assertions/nonenglish')

// Search with invalid search term#

module.exports = {
  'InvalidSearch': function (client) {

    // Loop over each postcode
    locations.invalid.forEach (function (item) {
      var location = item.location

      var homePage = client.page.home()

      // Navigate to the home page & submit postcode

      homeTests.confirm(homePage.load())
      homePage.setPostcodeAndSubmit(location)
      homeerrorTests.assertError(homePage)
})

    client.end()
}
,

// Search with empty search term

  'emptySearch': function (client) {

  // Loop over each postcode
  locations.empty.forEach (function (item) {
    var location = item.location

    var homePage = client.page.home()

    // Navigate to the home page & submit postcode

    homeTests.confirm(homePage.load())
    homePage.setPostcodeAndSubmit(location)
    homeerrorTests.assertBlank(homePage)
  })
    client.end()
},

// Search with non-english search term

  'nonenglishSearch': function (client) {

  // Loop over each postcode
  locations.nonenglish.forEach (function (item) {
    var location = item.location

    var homePage = client.page.home()

    // Navigate to the home page & submit postcode

    homeTests.confirm(homePage.load())
    homePage.setPostcodeAndSubmit(location)

    /**
    * Create non-english page object
    */
    var nonenglishPage = client.page.nonenglish()

    /**
    * Confirm correct Flood Zone Info
    */
    nonenglishTests.assertnonenglish(nonenglishPage, item)
  })
  client.end()
},
}
