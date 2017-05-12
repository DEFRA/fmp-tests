module.exports = {
  confirm: function (homePage) {
    homePage
      .assert.title('Flood map for planning - GOV.UK')
      .assert.containsText('@header', 'Flood map for planning')
      .assert.containsText('@headersubtext', 'This service is for learning about a site location\'s flood probability as part of development planning.')
      .assert.containsText('@descheader', 'Before you start')
      .assert.containsText('@descsubheader', 'This service has 3 steps:')
      .assert.containsText('@desc1', 'Provide a postcode, place or National Grid Reference (NGR) where your development will take place')
      .assert.containsText('@desc2', 'Confirm the location using a map')
      .assert.containsText('@desc3', 'View a map showing the probability of flooding in the area')
      .assert.containsText('@searchtext', 'Enter your development\'s location to view the probability of it flooding')
      .assert.containsText('@homelinktext', 'For general flood information, including local flood warnings, use the flood information service.')
      .assert.visible('@homelink')
  }
}
