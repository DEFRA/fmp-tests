module.exports = {
  confirm: function (homePage) {
    homePage
      .assert.title('Flood map for planning - GOV.UK')
      .assert.containsText('@header', 'Flood map for planning')
      .assert.containsText('@headersubtext', 'Use this service to find which flood zone your location is in.')
      .assert.containsText('@descheader', 'Before you start')
      .assert.containsText('@descsubheader', 'This service has 3 steps:')
      .assert.containsText('@desc1', 'Give a postcode, place, National Grid Reference or easting and northing co-ordinates for your location')
      .assert.containsText('@desc2', 'Confirm the location on a map')
      .assert.containsText('@desc3', 'See the flood zones in and around your location')
      .assert.containsText('@searchtext', 'Find the location')
      .assert.containsText('@homelinktext', 'For general flood information, including local flood warnings, use the flood information service.')
      .assert.visible('@homelink')
  },
  assertpostcodeError: function (page) {
    page.waitForElementVisible('@errorbox', 500)
    .assert.containsText('@errorbox', 'You need to give a place or postcode')
  },
  assertngrError: function (page) {
    page.waitForElementVisible('@errorbox', 500)
    .assert.containsText('@errorbox', 'You need to give a National Grid Reference (NGR)')
  },
  assertnorthingError: function (page) {
    page.waitForElementVisible('@errorbox', 500)
    .assert.containsText('@errorbox', 'You need to give a northing')
  },
  asserteastingError: function (page) {
    page.waitForElementVisible('@errorbox', 500)
    .assert.containsText('@errorbox', 'You need to give an easting')
  },
  assertEastingAndNorthingError: function (page) {
    page.waitForElementVisible('@errorbox', 500)
    .assert.containsText('@errorbox', 'You need to give an easting and northing')
  }
}
