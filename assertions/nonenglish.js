module.exports = {
  assertnonenglish: function (nonenglish) {
    nonenglish
    .assert.containsText('@header', 'We provide flood probability information for England only')
    .assert.containsText('@nitext', 'Flood probability information for Northern Ireland is available from the Northern Ireland Planning Portal')
    .assert.containsText('@sepatext', 'Flood probability information for Scotland is available from the Scottish Environment Protection Agency')
    .assert.containsText('@nrwtext', 'Flood probability information for Wales is available from Natural Resources Wales')
    .assert.containsText('@engtext', 'In England, you can use the Flood map for planning.')
    .assert.visible('@nilink')
    .assert.visible('@sepalink')
    .assert.visible('@nrwlink')
    .assert.visible('@englink')
  }
}
