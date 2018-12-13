module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'title': '#title',
    'header': '#title',
    'personalInfoCharterLink': '#content > main > div.grid-row.responsive-bottom-margin > div.column-two-thirds > div > p:nth-child(3) > a',
    'body': '#content > main > div.grid-row.responsive-bottom-margin > div.column-two-thirds > div > p:nth-child(5)',
    'footer': '#footer > div'
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
