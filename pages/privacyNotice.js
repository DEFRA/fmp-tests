module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'personalInfoCharterLink': 'need to add element',
    'backBtn': 'need to add element'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    clickPersonalInfoCharterLink: function () {
      return this.waitForElementVisible('@personalInfoCharterLink', 1000)
      .click('@personalInfoCharterLink')
    },
    clickBack: function () {
      return this.waitForElementVisible('@backBtn', 1000)
      .click('@backBtn')
    }
  }]
}
