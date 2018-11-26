module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'pageTitle': '#title',
    'personalInfoCharterLink': 'need to add element',
    'bottomPageElement': 'need to establish this element name'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    clickPersonalInfoCharterLink: function () {
      return this.waitForElementVisible('@personalInfoCharterLink', 1000)
      .click('@personalInfoCharterLink')
    }
  }]
}
