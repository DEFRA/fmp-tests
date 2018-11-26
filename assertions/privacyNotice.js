module.exports = {
  confirm: function (privacyNoticePage, browser) {
    privacyNoticePage
      .assert.title('Privacy Notice')
      .assert.containsText('@header', 'Some header text')
  },
  assertPrivacyNoticeContent: function (privacyNoticePage, browser) {
    privacyNoticePage
    .expect.element('#body').text.to.equal('lots of blurb about privacy notice')
  }
}
