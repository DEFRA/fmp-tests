module.exports = {
  confirm: function (personalInfoCharter, browser) {
    personalInfoCharter
      .assert.title('Personal information charter ')
      .assert.containsText('@header', 'Some header text, or maybe text from the very bottom of the page')
  },
  assertPersonalInfoCharterContent: function (personalInfoCharter, browser) {
    personalInfoCharter
    .expect.element('#body').text.to.equal('lots of blurb about privacy Info Charter - this may need to be multiple assertions as the page is very fragmented with content')
  }
}
