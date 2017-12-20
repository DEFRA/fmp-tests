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
    'searchtext': 'div.form-group.form-location-planning > fieldset > legend > h1',
    'postcoderadio': 'div.form-group.form-location-planning > fieldset > div:nth-child(2) > label',
    'postcodeplaceText': '#placeOrPostcode',
    'ngrradio': 'div.form-group.form-location-planning > fieldset > div:nth-child(4) > label',
    'ngrText': '#nationalGridReference',
    'enradio': 'div.form-group.form-location-planning > fieldset > div:nth-child(6) > label',
    'eastingText': '#easting',
    'northingText': '#northing',
    'submitBtn': '#home-page form button[type=submit]',
    'homelinktext': '#home-page > div:nth-child(4) > div > p',
    'homelink': 'a[href="https://flood-warning-information.service.gov.uk/"',
    'errorbox': '#home-page > div:nth-child(1) > div > div',
    'errorheader': '#error-summary-heading',
    'errortext': '#home-page > div:nth-child(1) > div > div > ul > li > a',
    'secondaryerrortext': '#place-postcode > label > span.error-message'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    setPostcode: function (value) {
      return this.setValue('@postcodeplaceText', value)
    },
    setngr: function (value) {
      return this.setValue('@ngrText', value)
    },
    seteasting: function (value) {
      return this.setValue('@eastingText', value)
    },
    setnorthing: function (value) {
      return this.setValue('@northingText', value)
    },
    submit: function () {
      return this.waitForElementVisible('@submitBtn', 1000)
      .click('@submitBtn')
    },
    setPostcodeAndSubmit: function (location) {
      return this.setPostcode(location).submit()
    },
    setngrAndSubmit: function (location) {
      return this.setngr(location).submit()
    },
    seteastingandnorthingAndSubmit: function (easting, northing) {
      return this.seteasting(easting).setnorthing(northing).submit()
    },
    seteastingAndSubmit: function (validentry) {
      return this.seteasting(validentry).submit()
    },
    setnorthingAndSubmit: function (validentry) {
      return this.setnorthing(validentry).submit()
    }
  }]
}
