module.exports = {
  confirm: function (privacyNoticePage, browser) {
    privacyNoticePage
      .assert.title('Privacy notice - Flood information service - GOV.UK')
      .expect.element('@header').text.to.equal('Privacy notice')
  },
  assertPrivacyNoticeContent: function (privacyNoticePage, browser) {
    privacyNoticePage
    .assert.containsText('@body', 'These are the standards you can expect from the Environment Agency when we collect, hold or use your personal information when you use our service.')
  }
}
