module.exports = {
  assertError: function (page) {
    page.waitForElementVisible('#home-page div.grid-row div.column-half form div.form-group div.error-message', 500)
    .assert.containsText('#home-page div.grid-row div.column-half form div.form-group div.error-message', 'The postcode, place or National Grid Reference you entered is not recognised.')
  },
  assertBlank: function (page) {
    page.waitForElementVisible('#home-page div.grid-row div.column-half form div.form-group div.error-message', 500)
    .assert.containsText('#home-page div.grid-row div.column-half form div.form-group div.error-message', 'Please enter a valid postcode, place or National Grid Reference, then select \'Continue\'')
  }
}
