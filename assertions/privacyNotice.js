module.exports = {
  confirm: function (privacyNoticePage, browser) {
    privacyNoticePage
      .assert.title('Privacy Notice')
      .assert.containsText('@header', 'Some header text, or maybe text from the very bottom of the page')
  },
  assertPrivacyNoticeContent: function (privacyNoticePage, browser) {
    privacyNoticePage
    .expect.element('#body').text.to.equal('lots of blurb about privacy notice - this may need to be multiple assertions as the page is very fragmented with content')
  }
}
