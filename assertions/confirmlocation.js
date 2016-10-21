module.exports = {
  confirm: function (confirmlocationPage) {
    confirmlocationPage
      .waitForElementVisible('@map', 2000)
      .assert.containsText('@header', 'Confirm the development location')
      .assert.containsText('@textblock1', 'Pinpoint your development accurately on the map to view the probability of it flooding.')
      .assert.containsText('@textblock2', 'Move the marker to the location of your development, then select \'Continue\'.')
      .assert.visible('@texticon')
      .assert.containsText('@textblock3', 'If it\'s already in the right place, select \'Continue\'.')
      .assert.visible('@map')
      .assert.visible('@mapzoomin')
      .assert.visible('@mapzoomout')
      .assert.visible('@mapfullscreen')
      .assert.visible('@mapscale')
      .assert.visible('@mapinfo')
  },
  url: function (browser, location) {
    browser.assert.urlContains(location)
  }
}
