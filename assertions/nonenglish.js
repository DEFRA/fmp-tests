module.exports = {
  assertnonenglish: function (nonenglish) {
    nonenglish
    .assert.containsText('@header', 'This service is for locations in England only')
    .assert.containsText('@nitext', 'Find flood information for Northern Ireland.')
    .assert.containsText('@sepatext', 'Find flood information for Scotland.')
    .assert.containsText('@nrwtext', 'Find flood information for Wales.')
    .assert.containsText('@engtext', 'In England, you can get flood information for planning.')
    .assert.visible('@nilink')
    .assert.visible('@sepalink')
    .assert.visible('@nrwlink')
    .assert.visible('@englink')
  }
}
