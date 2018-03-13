module.exports = {
  confirm: function (homePage, browser) {
    homePage
      .assert.title('Flood map for planning - GOV.UK')
      .assert.containsText('@header', 'Flood map for planning')
  },
  assertcopy: function (homePage, browser) {
    homePage
      .assert.containsText('@headersubtext1', 'Use this service to find out which flood zone a location is in, as part of land use planning')
      .assert.containsText('@headersubtext2', 'If you\'re planning a development you may need to undertake a more detailed flood risk assessment')
      .assert.containsText('@descheader', 'Before you start')
      .assert.containsText('@desc1', 'You will need the postcode, place, national grid reference (NGR) or easting and northing co-ordinates for the location you want to know about.')
      .assert.containsText('@desc2', 'You can then:')
      .assert.containsText('@desc3', 'confirm the location with a marker or site shape to see the likelihood of it flooding')
      .assert.containsText('@desc4', 'view and download the map and guidance information as a PDF file')
      .assert.containsText('@searchtext', 'Find the location')
      .assert.visible('@postcoderadio')
      .assert.visible('@postcodeheader')
      .assert.containsText('@postcodeheader', 'By place or postcode')
      .assert.visible('@postcodeplaceText')
      .assert.visible('@ngrradio')
      .assert.visible('@ngrheader')
      .assert.containsText('@ngrheader', 'By National Grid Reference (NGR)')
      .assert.hidden('@ngrText')
      .assert.visible('@enradio')
      .assert.visible('@enheader')
      .assert.containsText('@enheader', 'By easting and northing')
      .assert.hidden('@eastingheader')
      .assert.hidden('@northingheader')
      .assert.hidden('@eastingText')
      .assert.hidden('@northingText')
      .assert.visible('@submitBtn')
      .assert.containsText('@homelinktext', 'For general flood information, including local flood warnings, use the flood information service.')
      .assert.visible('@homelink')
  },
  assertpostcodeError: function (page) {
    page.waitForElementVisible('@errorheader', 500)
    .assert.containsText('@errortext', 'You need to give a place or postcode')
  },
  assertngrError: function (page) {
    page.waitForElementVisible('@errorheader', 500)
    .assert.containsText('@errortext', 'You need to give a National Grid Reference (NGR)')
  },
  assertnorthingError: function (page) {
    page.waitForElementVisible('@errorheader', 500)
    .assert.containsText('@errortext', 'You need to give a northing')
  },
  asserteastingError: function (page) {
    page.waitForElementVisible('@errorheader', 500)
    .assert.containsText('@errortext', 'You need to give an easting')
  },
  assertEastingAndNorthingError: function (page) {
    page.waitForElementVisible('@errorheader', 500)
    .assert.containsText('@errortext', 'You need to give an easting and northing')
  }
}
