'use strict'

var homePageAssertions = require('../../assertions/home')
var privacyNoticeAssertions = require('../../assertions/privacyNotice')
var personalInfoCharterPageAssertions = require('../../assertions/personalInfoCharter')

module.exports = {
  '@tags': ['myTest'],
  'happy-path-privacy-notice': function (client) {
    // Given - user is on FMP service site
    // When - user follows the 'Privacy notice' link in the page footer
    // Then - user is presented with the Privacy notice (as per attached doc)

    // Given - user is on Privacy notice page
    // When - user follows the 'Personal Information Charter' link
    // Then - user is presented with the Personal Information Charter page

    var homePage = client.page.home()
    var privacyNoticePage = client.page.privacyNotice()
    var personalInfoCharterPage = client.page.personalInfoCharter()

    // Navigate to the home page & assert correct page loaded
    homePageAssertions.confirm(homePage.load())
    // click the Privacy notice link
    homePage.clickPrivacyNoticeLink()
    // confirm the privacy notice page is loaded
    privacyNoticeAssertions.confirm(privacyNoticePage)
    // assert the content is as expected
    privacyNoticeAssertions.assertPrivacyNoticeContent(privacyNoticePage)
    // From the privacy notice page, click the personal information charter click Privacy Notice Link
    privacyNoticePage.clickPersonalInfoCharterLink(privacyNoticePage)
    // confirm the page is loaded and assert the content is as expected
    personalInfoCharterPageAssertions.confirm(personalInfoCharterPage)

    // close the browser
    client.end()
  }
}
