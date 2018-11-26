'use strict'

var homePageAssertions = require('../../assertions/home')
var privacyNoticePageAssertions = require('../../assertions/privacyNotice')
var personalInfoCharterPageAssertions = require('../../assertions/personalInfoCharter')

module.exports = {
  'happy-path-privacy-notice': function (client) {
// Given - user is on FMP service site
// When - user follows the 'Privacy notice' link in the page footer
// Then - user is presented with the Privacy notice (as per attached doc)

// Given - user is on Privacy notice page
// When - user follows the 'Personal Information Charter' link
// Then - user is presented with the Personal Information Charter page
   
      var homePage = client.page.home()
      var privacyNoticePage = client.page.privacyNotice
      var personalInfoCharterPage = client.page.personalInfoCharter

      // Navigate to the home page & assert correct page loaded
      // click the Privacy notice link
      // confirm the privacy notice page is loaded
      // assert the content is as expected
      homePageAssertions.confirm(homePage.load())
      homePage.clickPrivacyNoticeLink()
      privacyNoticePageAssertions.confirm(privacyNoticePage.load())
      privacyNoticePageAssertions.assertPrivacyNoticeContent()
      // From the privacy notice page, click the personal information charter click Privacy Notice Link
      // confirm the page is loaded
      // assert the content is as expected
      privacyNoticePage.clickPersonalInfoCharterLink()
      personalInfoCharterPageAssertions.confirm(personalInfoCharterPage.load())
      personalInfoCharterPageAssertions.assertPersonalInfoCharterContent()

    // close the browser
    client.end()
  }
}



// Given - user is on Personal Information Charter page
// When - user wants to return to start page
// Then - user can use the 'back' option to navigate back