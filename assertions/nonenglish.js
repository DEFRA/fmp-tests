module.exports = {
  assertnonenglish: function (nonenglish) {
    nonenglish
    .assert.containsText('@header', 'We provide flood risk information for England only')
    .assert.containsText('@nitext', 'Flood risk information for Northern Ireland is available from the Northern Ireland Planning Portal')
    .assert.containsText('@sepatext', 'Flood risk information for Scotland is available from the Scottish Environment Protection Agency')
    .assert.containsText('@nrwtext', 'Flood risk information for Wales is available from Natural Resources Wales')
    .assert.containsText('@engtext', 'Flood risk information for England is available from the Environment Agency')
    .assert.visible('@nilink')
    .assert.visible('@sepalink')
    .assert.visible('@nrwlink')
    .assert.visible('@englink')
  }
}
