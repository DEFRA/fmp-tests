var data = require('./data')
var summaryTests = require('../../assertions/summary')

module.exports = {
  'happy-path-polygon': function (client) {
    // Tests postcode search and polygon functionality
    // Loop over each postcode
    data.polygon.forEach(function (item) {
      var polygon = item.polygon

      var summaryPage = client.page.summary()

      /**
      * Confirm correct Flood Zone Info
      */
      summaryTests.loadPagewithpolygon(summaryPage, polygon)
      summaryTests.confirm(summaryPage, item)
    })
    client.end()
  }
}
