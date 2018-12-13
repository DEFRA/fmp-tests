module.exports = {
  confirm: function (privacyNoticePage, browser) {
    privacyNoticePage
      .assert.title('Privacy notice - Flood information service - GOV.UK')
      .expect.element('@header').text.to.equal('Privacy notice')
  },
  assertPrivacyNoticeContent: function (privacyNoticePage, browser) {
    privacyNoticePage
    .expect.element('@body').text.to.equal('When you use our GOV.UK service, we place small files called cookies onto your computer to collect information about how you use it. You can find out more about cookies and how to manage them.')
  }
}
