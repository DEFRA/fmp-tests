module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'main': '#content',
    'header': 'h1',
    'placeText': '#place',
    'submitBtn': '#home-page form button[type=submit]'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    setLocation: function (value) {
        return this.setValue('@placeText', value)
    },
    submit: function () {
        return this.waitForElementVisible('@submitBtn', 1000)
        .click('@submitBtn')
    },
    setPostcodeAndSubmit: function (location) {
      return this.setLocation(location).submit()
    }
    }
  ]
}
