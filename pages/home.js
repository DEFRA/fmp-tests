module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'main': '#content',
    'header': 'h1',
    'headersubtext1': '#home-page > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)',
    'headersubtext2': '#home-page > div:nth-child(1) > div:nth-child(1) > p:nth-child(3)',
    'descheader': '.heading-medium',
    'desc1': '.nojs-hide > p:nth-child(2)',
    'desc2': '.nojs-hide > p:nth-child(3)',
    'desc3': '.list > li:nth-child(1)',
    'desc4': '.list > li:nth-child(2)',
    'searchtext': 'div.form-group.form-location-planning > fieldset > legend > h1',
    'postcoderadio': 'div.form-group.form-location-planning > fieldset > div:nth-child(2) > label',
    'postcodeheader': 'div.multiple-choice:nth-child(2) > label:nth-child(2)',
    'postcodeplaceText': '#placeOrPostcode',
    'ngrradio': 'div.form-group.form-location-planning > fieldset > div:nth-child(4) > label',
    'ngrheader': 'div.multiple-choice:nth-child(4) > label:nth-child(2)',
    'ngrText': '#nationalGridReference',
    'enradio': 'div.form-group.form-location-planning > fieldset > div:nth-child(6) > label',
    'enheader': 'div.multiple-choice:nth-child(6) > label:nth-child(2)',
    'eastingheader': '.form-group-easting > div:nth-child(1) > label:nth-child(1) > span:nth-child(1)',
    'northingheader': 'div.form-group:nth-child(3) > div:nth-child(1) > label:nth-child(1) > span:nth-child(1)',
    'eastingText': '#easting',
    'northingText': '#northing',
    'submitBtn': '#home-page form button[type=submit]',
    'homelinktext': '#home-page > div:nth-child(4) > div > p',
    'homelink': 'a[href="https://flood-warning-information.service.gov.uk/"',
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
