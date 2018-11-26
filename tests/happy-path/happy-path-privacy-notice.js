var homePageAssertions = require('../../assertions/home')
var privacyNoticePageAssertions = require('../../assertions/privacyNotice')

module.exports = {
  'happy-path-privacy-notice': function (client) {
// Given - user is on FMP service site
// When - user follows the 'Privacy notice' link in the page footer
// Then - user is presented with the Privacy notice (as per attached doc)
   
      var homePage = client.page.home()
      // Navigate to the home page & assert correct page loaded
      homePageAssertions.confirm(homePage.load())
      // click the Privacy notice link
      homePage.clickPrivacyNoticeLink()
      privacyNoticePageAssertions.confirm(privacyNoticePage.load())
      privacyNoticePageAssertions.assertPrivacyNoticeContent()

    }
    client.end()
  }

// Given - user is on Privacy notice page
// When - user follows the 'Personal Information Charter' link
// Then - user is presented with the Personal Information Charter page

// Given - user is on Personal Information Charter page
// When - user wants to return to start page
// Then - user can use the 'back' option to navigate back