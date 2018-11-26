module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'secondaryerrortext': '#place-postcode > label > span.error-message',
    'backBtn': 'need to add element'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    clickBack: function () {
      return this.waitForElementVisible('@backBtn', 1000)
      .click('@backBtn')
    }
  }]
}