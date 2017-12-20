var locations = require('./data.js')
var homeTests = require('../../assertions/home')
var nonenglishTests = require('../../assertions/nonenglish')

module.exports = {

// Search with invalid search term

  'InvalidPostcodeSearch': function (client) {

    // Loop over each postcode
    locations.invalidpostcode.forEach (function (item) {
      var location = item.location

      var homePage = client.page.home()

      // Navigate to the home page & submit postcode

      homeTests.confirm(homePage.load())
      homePage.click('@postcoderadio')
      homePage.setPostcodeAndSubmit(location)
      homeTests.assertpostcodeError(homePage)
})

    client.end()
},

// Search with empty postcode search term

  'emptySearch': function (client) {
  // Loop over each postcode
    locations.empty.forEach(function (item) {
      var location = item.location

      var homePage = client.page.home()

    // Navigate to the home page & submit postcode

    homeTests.confirm(homePage.load())
    homePage.click('@postcoderadio')
    homePage.setPostcodeAndSubmit(location)
    homeTests.assertpostcodeError(homePage)
  })
    client.end()
},

//Search with invalid NGR

'InvalidNGRSearch': function (client) {

  // Loop over each postcode
  locations.invalidngr.forEach (function (item) {
    var location = item.location

    var homePage = client.page.home()

    // Navigate to the home page & submit postcode

    homeTests.confirm(homePage.load())
    homePage.click('@ngrradio')
    homePage.setngrAndSubmit(location)
    homeTests.assertngrError(homePage)
})

  client.end()
},

// Search with empty ngr search term

  'emptyngrSearch': function (client) {

  // Loop over each postcode
  locations.empty.forEach (function (item) {
    var location = item.location

    var homePage = client.page.home()

    // Navigate to the home page & submit postcode

    homeTests.confirm(homePage.load())
    homePage.click('@ngrradio')
    homePage.setngrAndSubmit(location)
    homeTests.assertngrError(homePage)
  })
    client.end()
},

//Search with empty Easting

'emptyeastingSearch': function (client) {

  // Loop over each postcode
  locations.emptyen.forEach (function (item) {
    var validentry = item.validentry
    var emptyvalue = item.emptyvalue

    var homePage = client.page.home()

    // Navigate to the home page & submit postcode

    homeTests.confirm(homePage.load())
    homePage.click('@enradio')
    homePage.setnorthingAndSubmit(validentry)
    homeTests.asserteastingError(homePage)
  })
    client.end()
},

// Search with empty Northing

  'emptynorthingSearch': function (client) {

  // Loop over each postcode
  locations.emptyen.forEach (function (item) {
    var validentry = item.validentry
    var emptyvalue = item.emptyvalue

    var homePage = client.page.home()

    // Navigate to the home page & submit postcode

    homeTests.confirm(homePage.load())
    homePage.click('@enradio')
    homePage.seteastingAndSubmit(validentry)
    homeTests.assertnorthingError(homePage)
  })
    client.end()
  },

// Search with non-english search term

  'nonenglishSearch': function (client) {
  // Loop over each postcode
    locations.nonenglish.forEach(function (item) {
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
  }
}
