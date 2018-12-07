module.exports = {
  confirm: function (personalInfoCharter, browser) {
    personalInfoCharter
      .assert.title('Privacy policy - Flood map for planning - GOV.UK') // content might be revised
      .assert.containsText('@bottomPageElement', 'We keep our Personal Information Charter under regular review.')
      .assert.containsText('@textBody', 'When we collect, hold, use or otherwise process your personal information, you have a right to be told:')
  }
}
