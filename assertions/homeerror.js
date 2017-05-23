module.exports = {
  assertError: function (page) {
    page.waitForElementVisible('@homeerror', 500)
    .assert.containsText('@homeerror', 'The postcode, place or National Grid Reference you entered is not recognised.')
  },
  assertBlank: function (page) {
    page.waitForElementVisible('@homeerror', 500)
    .assert.containsText('@homeerror', 'Please enter a valid postcode, place or National Grid Reference, then select \'Continue\'')
  }
}
