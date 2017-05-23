module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'main': '#content',
    'header': 'h1',
    'headersubtext': '#home-page p',
    'descheader': '#home-page h2.heading-medium',
    'descsubheader': '#home-page:nth-child(3)',
    'desc1': '#home-page ol.list.list-number li:nth-child(1)',
    'desc2': '#home-page ol.list.list-number li:nth-child(2)',
    'desc3': '#home-page ol.list.list-number li:nth-child(3)',
    'searchtext': '#home-page h3.heading-medium',
    'placeText': '#place.form-control',
    'submitBtn': '#home-page form button[type=submit]',
    'homelinktext': '#home-page > div:nth-child(5) > div > p',
    'homelink': 'a[href="https://flood-warning-information.service.gov.uk/"',
    'homeerror': '#home-page div.grid-row div.column-half form div.form-group div.error-message'
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
  }]
}
